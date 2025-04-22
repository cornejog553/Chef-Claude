import logo from './assets/chef-claude-icon.png';
export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Chef Claude" className="header-icon" />
            <h1 className="header-title">Chef Claude</h1>
        </div>
    )
}

