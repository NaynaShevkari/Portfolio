import './Sidebar.css';

function Sidebar({ isOpen, onClose, title, subtitle, children }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div>
            <h2 className="sidebar-title">{title}</h2>
            {subtitle && <p className="sidebar-subtitle">{subtitle}</p>}
          </div>
          <button className="sidebar-close" onClick={onClose}>×</button>
        </div>
        <div className="sidebar-body">
          {children}
        </div>
      </div>
    </>
  );
}

export default Sidebar;