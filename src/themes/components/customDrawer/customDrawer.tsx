import { NextPage } from "next";
import { Drawer } from 'antd';
import { ReactNode } from "react";

interface WidgetDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const WidgetDrawer: NextPage<WidgetDrawerProps> = ({ isOpen, onClose,children }) => {
    return (
        <>
            <Drawer onClose={onClose} open={isOpen} width={300} closeIcon={null}  >
                {children}
            </Drawer>
        </>
    );
};

export default WidgetDrawer;
