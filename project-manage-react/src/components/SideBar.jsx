import './SideBar.css'

export function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <p>Async Avengers<br></br>Program Planning</p>
            </div>
            <hr></hr>
            <ul className="sidebar-menu">
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/analytics">Analytics</a></li>
                <li><a href="/reports">Reports</a></li>
                {/* Add more sidebar links as needed */}
            </ul>
        </div>
    )
}