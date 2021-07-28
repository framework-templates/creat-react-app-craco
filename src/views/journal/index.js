import React, { Component } from 'react';
import { Button, Pagination, Modal, Form, Input, Radio, Row, Col } from 'antd';
// import { FormInstance } from 'antd/lib/form';
import JournalTabel from 'src/views/journal/components/journalTabel';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 500,
      currentNum: 1,
      pageSize: 10,
      visible: false,
      initialValues: {
        putShelves: true
      }
    };
    this.formRef = React.createRef();
    //  this.formRef
  }

  onAdd = () => {
    this.setState({
      visible: true
    });
    console.log('添加', this);
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
    console.log('Finish:', values);
  };

  onAuthorChange = () => {
    console.log('radio变化');
  };

  render() {
    const { total, currentNum, visible, initialValues } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.onAdd}>
          添加日志
        </Button>
        <JournalTabel></JournalTabel>
        <Pagination defaultCurrent={currentNum} total={total} />
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
                  <Input.TextArea />
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
