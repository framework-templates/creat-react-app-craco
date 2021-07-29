import React, { Component } from 'react';
import { message } from 'antd';
import ReactQuill, { Quill } from 'react-quill';
import highlight from 'highlight.js';
import { ImageExtend } from 'quill-image-extend-module';
import { getToken } from '@/utils/auth';
import { uploadFile } from '@/api/common';
Quill.register({
  'modules/ImageExtend': ImageExtend
});
class QuillEditor extends Component {
  constructor(props) {
    super(props);
    const { defaultValue = '' } = this.props;
    this.quillEditorRef = React.createRef();
    this.state = {
      value: defaultValue,
      placeholder: '请输入内容',
      modules: {
        ImageExtend: {
          loading: true,
          name: 'file',
          size: 5,
          action: process.env.REACT_APP_BASE_API + '/public/upload',
          response: (res) => {
            return res.data;
          },
          headers: (xhr) => {
            xhr.setRequestHeader('Authorization', getToken());
          }, // 可选参数 设置请求头部
          sizeError: () => {
            return message.error('图片超过5M');
          } // 图片超过大小的回调
        },
        toolbar: {
          container: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'], //引用，代码块
            [{ header: 1 }, { header: 2 }], // 几级标题
            [{ list: 'ordered' }, { list: 'bullet' }], // 有序列表，无序列表
            [{ script: 'sub' }, { script: 'super' }], // 下角标，上角标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            [{ direction: 'rtl' }], // 文字输入方向
            [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
            [{ color: [] }, { background: [] }], // 颜色选择
            [{ font: [] }], // 字体
            [{ align: [] }], // 居中
            ['link', 'image'],
            ['clean']
          ],
          handlers: {
            image: this.imageHandler
          }
        },
        syntax: {
          highlight: (text) => {
            return highlight.highlightAuto(text).value; // 这里就是代码高亮需要配置的地方
          }
        }
      }
    };
  }

  imageHandler = () => {
    const quillEditor = this.quillEditorRef.current.getEditor();
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      if (!/^image\/.+$/.test(file.type)) {
        return message.error('必须上传图片');
      }
      if (file.size / 1024 / 1024 > 5) {
        return message.error('图片超过5M');
      }
      formData.append('file', file);
      const res = await uploadFile(formData);
      const range = quillEditor.getSelection();
      const link = res.data;
      //此部分将插入图像
      //通过下面的“image”选项，您只需将img的src（link）放在这里
      quillEditor.insertEmbed(range.index, 'image', link);
    };
  };

  onChange = (value) => {
    if (value === '<p><br></p>') {
      value = '';
    }
    this.setState({ value: value }, () => {
      const { onChange } = this.props;
      if (onChange) {
        onChange(value);
      }
    });
  };

  render() {
    const { modules, value } = this.state;
    return (
      <div>
        <ReactQuill
          value={value}
          ref={this.quillEditorRef}
          modules={modules}
          onChange={this.onChange}
        ></ReactQuill>
      </div>
    );
  }
}

export default QuillEditor;
