import React from 'react';
import {Sidebar, Menu, MenuItem, SubMenu, sidebarClasses} from 'react-pro-sidebar';


const LvmSidebar = () => {
    return (
        <Sidebar rootStyles={{
            [`.${sidebarClasses.container}`]: {
                backgroundColor: 'red',
            },
        }}>
            <Menu>
                <SubMenu label="Диаграммы">
                    <MenuItem> Круговые </MenuItem>
                    <MenuItem> Столбчатые </MenuItem>
                    <MenuItem> График </MenuItem>
                </SubMenu>
                <MenuItem> Отчеты </MenuItem>
                <MenuItem> Настройки </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default LvmSidebar;