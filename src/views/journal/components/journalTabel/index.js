import { Component } from 'react';
import { Button, Table } from 'antd';
import '@/views/journal/components/journalTabel/index.scss';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: '标题',
          dataIndex: 'title',
          width: 200,
          ellipsis: true,
          fixed: 'left'
        },
        {
          title: '描述',
          dataIndex: 'section',
          width: 450,
          ellipsis: true
        },
        {
          title: '热度',
          dataIndex: 'hot',
          width: 60
        },
        {
          title: '已上架',
          dataIndex: 'putShelves',
          width: 80,
          render: (text) => {
            return text ? '已上架' : '未上架';
          }
        },
        {
          title: '创建时间',
          dataIndex: 'creatTime',
          width: 160
        },
        {
          title: '操作',
          dataIndex: 'operation',
          width: 160,
          fixed: 'right',
          render: () => {
            return (
              <div className="group-button">
                <Button type="primary">编辑</Button>
                <Button type="primary" danger>
                  删除
                </Button>
              </div>
            );
          }
        }
      ]
    };
  }

  render() {
    const { tableData = [], rowKey } = this.props;
    const { columns } = this.state;
    return (
      <Table
        rowKey={rowKey}
        scroll={{ x: 1300, y: 680 }}
        pagination={false}
        dataSource={tableData}
        columns={columns}
      />
    );
  }
}

export default index;
