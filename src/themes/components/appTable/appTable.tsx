import { MoreOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./appTable.module.scss";
import { Avatar, Badge, Dropdown, Table } from "antd";
import { ColumnsType } from "antd/es/table";
export interface CompaniesData {
  image_url: string;
  Companies: string;
  Category: string;
  Users: string;
  Created_on: string;
  Status: boolean;
}

export interface ReportedAccountData {
  image_url: string;
  Name: string;
  Reported_by: string;
  Reason: string;
  Date_reported: string;
}

export interface BillingData {
  image_url: string;
  Transaction_id: number;
  Account_holder: string;
  Company_name: string;
  Amount: number;
  Date_modified: string;
}
export interface CandidateData {
  image_url: string;
  Name: string;
  Date_modified: string;
  Status: boolean;
}

export interface JobsData {
  image_url: string;
  Job_title: string;
  Companies: string;
  Category: string;
  Level: string;
  Posted_by: string;
  Date_modified: string;
  Status: string;
}

export interface VerificationQueueData {
  image_url: string;
  Name: string;
  Status: string;
  Date_requested: string;
}

interface AppTableProps {
  isLoading?: boolean;
  dataSource: CandidateData[] | CompaniesData[];
  onRowClick: (record: CandidateData | CompaniesData) => void;
  onRowActionClick: (
    type: "task_one" | "task_two",
    record: CandidateData | CompaniesData
  ) => void;
}

const AppTable: React.FC<AppTableProps> = ({
  dataSource,
  onRowClick,
  onRowActionClick,
  isLoading,
}) => {
  let columnsToUse: ColumnsType<any>;

  const rowActionButtons = (record: CandidateData | CompaniesData) => {
    return [
      {
        onClick: () => onRowActionClick("task_one", record),
        label: "Task One",
        key: "0",
      },
      {
        onClick: () => onRowActionClick("task_two", record),
        label: "Task Two",
        key: "1",
      },
    ];
  };

  const columns: ColumnsType<any> =
    dataSource.length > 0
      ? Object.keys(dataSource[0])
          .filter((key) => key !== "image_url")
          .map((key) => ({
            title: key
              .split("_")
              .map((word, index) => {
                if (index === 0)
                  return word.charAt(0).toUpperCase() + word.slice(1);
                return word;
              })
              .join(" "),
            // Join words with spaces

            dataIndex: key,
            key: key,
            width: "15%",
            sorter:
              key === "Companies" ||
              key === "Company_name" ||
              key === "Name" ||
              key === "Job_title" ||
              key === "Category" ||
              key === "Level" ||
              key === "Account_holder" ||
              key === "Transaction_id"
                ? (a, b) => {
                    if (key === "Transaction_id") {
                      return a[key] - b[key];
                    } else {
                      // For string values, continue using localeCompare
                      return a[key].localeCompare(b[key]);
                    }
                  }
                : undefined, // Apply sorter to the first field only

            render: (text: any, record: any) => {
              // Customize rendering based on data type if needed
              if (typeof text === "boolean") {
                return (
                  <span>
                    {text ? (
                      <Badge status="success" text="Active" />
                    ) : (
                      <Badge status="error" text="Inactive" />
                    )}
                  </span>
                );
              }
              if (key === "Status") {
                if (text === "Closed") {
                  return <Badge status="error" text="Closed" />;
                } else if (text === "Active") {
                  return <Badge status="success" text="Active" />;
                } else if (text === "Inactive") {
                  return <Badge status="warning" text="Inactive" />;
                }
              }
              if (key === "Transaction_id") {
                return <span>#{text}</span>; // Render Transaction_id with #
              }
              if (key === "Amount") {
                return <span>${text}</span>; // Render Amount with $
              }
              if (key === "Name" && record.hasOwnProperty("image_url")) {
                return (
                  <div>
                    <Avatar
                      src={record.image_url.src}
                      size={24}
                      style={{ marginRight: "6px" }}
                    />
                    <span>{text}</span>
                  </div>
                );
              }
              if (
                key === "Company_name" &&
                record.hasOwnProperty("image_url")
              ) {
                return (
                  <div>
                    <Avatar
                      src={record.image_url.src}
                      size={24}
                      style={{ marginRight: "6px" }}
                    />
                    <span>{text}</span>
                  </div>
                );
              }
              if (key === "Companies" && record.hasOwnProperty("image_url")) {
                return (
                  <div>
                    <Avatar
                      src={record.image_url.src}
                      size={24}
                      style={{ marginRight: "6px" }}
                    />
                    <span>{text}</span>
                  </div>
                );
              }

              // Add other custom rendering logic for different data types
              return text;
            },
          }))
      : [];
  columns.push({
    width: "42%",
    render: (value, record, index) => (
      <Dropdown menu={{ items: rowActionButtons(record) }} trigger={["click"]}>
        <MoreOutlined />
      </Dropdown>
    ),
    className: styles.rowActionButtonCell,
  });

  return (
    <div className={styles.candidatesTableWrap}>
      <Table
        loading={isLoading ?? false}
        columns={columns}
        dataSource={dataSource}
        showSorterTooltip={false}
        pagination={{
          pageSizeOptions: [10, 20, 30, 40, 50],
          defaultPageSize: 10,
          showQuickJumper: false,
          showTotal: (total, range) => {
            return `${range[0]}-${range[1]} of ${total}`;
          },
          showSizeChanger: true,
          locale: {
            items_per_page: "",
          },
        }}
        className={styles.candidatesTable}
        onRow={(record) => {
          return {
            onClick: (event) => {
              event.preventDefault();
              onRowClick(record);
            },
          };
        }}
      />
    </div>
  );
};

export default AppTable;
