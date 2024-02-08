import './SideBar.css'

export function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                Dashboard Menu
            </div>
            <ul className="sidebar-menu">
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/analytics">Analytics</a></li>
                <li><a href="/reports">Reports</a></li>
                {/* Add more sidebar links as needed */}
            </ul>
        </div>
    )
}