import './SideBar.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';


const buttons = [
    <Button key="one">Dashboard</Button>,
    <Button key="two">Analytics</Button>,
    <Button key="three">Reports</Button>,
];

export function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <p>Async Avengers<br></br>Program Planning</p>
            </div>
 

            {/* <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                variant="text"
                fullWidth={true}
            >
                {buttons}
            </ButtonGroup> */}

            <ul className="sidebar-menu">
                <li><a href="/dashboard"><b>Dashboard</b></a></li>
                <li><Link to="/analytics"><b>Analytics</b></Link></li>
                <li><a href="/reports"><b>Reports</b></a></li>
            </ul>
        </div>
    )
}