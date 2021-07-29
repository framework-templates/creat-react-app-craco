import React, { Component } from 'react';
import { Button, Pagination, Modal, Form, Input, Radio, Row, Col, Spin, message } from 'antd';
// import { FormInstance } from 'antd/lib/form';
import { getJournalData, saveJournalData } from '@/api/journal';
import JournalTabel from '@/views/journal/components/journalTabel';
import QuillEditor from '@/components/QuillEditor';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pageCount: 1,
      pageSize: 10,
      tableData: [], //表格数据
      visible: false, //弹窗开关
      spinning: false, //spri
      initialValues: {
        putShelves: true
      }
    };
    this.formRef = React.createRef();
  }

  componentDidMount() {
    // 获取表格数据
    this.getJournalData();
  }

  onAdd = () => {
    this.setState({
      visible: true
    });
  };

  onCancel = () => {
    this.formRef.current.resetFields();
    this.setState({
      visible: false
    });
  };

  onConfirm = () => {
    console.log('确定', this.formRef);
    // 手动触发提交进行校验
    this.formRef.current.submit();
  };

  // 表单校验通过后执行
  onFinish = (values) => {
    saveJournalData(values)
      .then(() => {
        this.onCancel();
        this.getJournalData();
        message.success('保存成功');
      })
      .catch(() => {});
    console.log('Finish:', values);
  };

  onAuthorChange = () => {
    console.log('radio变化');
  };

  // 获取表格数据
  getJournalData = () => {
    this.setState({
      spinning: true
    });
    const { pageCount, pageSize } = this.state;
    getJournalData({ pageCount, pageSize })
      .then((res) => {
        const { list, total } = res.data;
        this.setState({
          spinning: false,
          tableData: list,
          total
        });
      })
      .catch(() => {});
  };
  // 分页变化时
  onPaginationChange = (pageCount, pageSize) => {
    console.log(pageCount, pageSize);
    this.setState(
      {
        pageCount,
        pageSize
      },
      () => {
        this.getJournalData();
      }
    );
  };

  render() {
    const { tableData, total, pageCount, visible, initialValues, spinning } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.onAdd}>
          添加日志
        </Button>
        <Spin tip="疯狂载入中..." spinning={spinning}>
          <JournalTabel tableData={tableData} rowKey="id"></JournalTabel>
          <Pagination
            current={pageCount}
            showSizeChanger
            total={total}
            onChange={this.onPaginationChange}
          />
        </Spin>
        <Modal
          className="journal-form-modal"
          title="日志"
          visible={visible}
          onOk={this.onConfirm}
          onCancel={this.onCancel}
          cancelText="取 消"
          okText="确 认"
          width="100%"
        >
          <Form
            ref={this.formRef}
            name="journal-form"
            initialValues={initialValues}
            onFinish={this.onFinish}
          >
            <Row gutter={20}>
              <Col span={8}>
                <Form.Item
                  label="标题"
                  name="title"
                  rules={[{ required: true, message: '请输入标题' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="描述"
                  name="section"
                  rules={[{ required: true, message: '请输入描述' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="作者"
                  name="author"
                  rules={[{ required: true, message: '请输入作者' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="是否上架" name="putShelves">
                  <Radio.Group>
                    <Radio value={true}>是</Radio>
                    <Radio value={false}>否</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={16}>
                <Form.Item
                  label="富文本"
                  name="editorText"
                  rules={[{ required: true, message: '请输入富文本' }]}
                >
                  <QuillEditor></QuillEditor>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </>
    );
  }
}

export default index;
