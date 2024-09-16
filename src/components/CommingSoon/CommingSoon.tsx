import React from "react";
import {
    // LaptopOutlined,
    // NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import Office from "./App/Office";
import Common from "./App/Common";

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const items3: MenuProps["items"] = [
    {
        label: "Ứng Dụng",
        key: "app",
        icon: React.createElement(UserOutlined),
        children: [
            { key: 3, label: "Office" },
            { key: 4, label: "Phổ Thông" },
        ],
    },
    {
        label: "Quản Trị",
        key: "provider",
        icon: React.createElement(UserOutlined),
        children: [
            { key: 1, label: "Cập Nhật Net" },
            { key: 2, label: "Thêm Net" },
        ],
    },
];

const ContentComponent: React.FC = () => {
    const location = useLocation();
    console.log(location.pathname.split("/").pop());
    const path = location.pathname.split("/").pop();

    const renderContent = () => {
        switch (path) {
            case "update":
                return <div>OK</div>;
            case "post":
                return <div>Content for menu item 2</div>;
            case "office":
                return <Office />;
            case "common":
                return <Common />;
            // return <Common />;
        }
    };

    return (
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {renderContent()}
        </Content>
    );
};

const CommingSoon = (): JSX.Element => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate: NavigateFunction = useNavigate();

    const handllerClick = (e: MenuInfo) => {
        const key = e.key;
        switch (key) {
            case "1":
                navigate("/update/net");
                break;
            case "2":
                navigate("/post/net");
                break;
            case "3":
                navigate("/comming/download/office");
                break;
            case "4":
                navigate("/comming/download/common");
                break;
            default:
                break;
        }
    };

    return (
        <Layout>
            <Header style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={items1}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: "0 48px" }}>
                <Breadcrumb style={{ margin: "16px 0", fontSize: "2rem" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{
                        padding: "24px 0",
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Sider
                        style={{
                            background: colorBgContainer,
                        }}
                        width={200}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            style={{
                                height: "100%",
                                fontSize: "2rem",
                                userSelect: "none",
                            }}
                            items={items3}
                            onClick={(e) => handllerClick(e)}
                        />
                    </Sider>
                    <Content style={{ padding: "0 24px", minHeight: 280 }}>
                        <ContentComponent />
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                {/* ©{new Date().getFullYear()} */}
            </Footer>
        </Layout>
    );
};

export default CommingSoon;
