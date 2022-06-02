
function HostPage() {
    return (
        <div className="main-host-container">
            <div className="host-right-container">
                <div className="create-resort-container">
                    <h2>Add Another Resort</h2>
                    <button>Add Resort</button>
                </div>
                <div className="delete-resort-container">
                    <h2>Property out of service?</h2>
                    <a>Delete Resorts here!</a>
                    <button>Resort List</button>
                </div>
            </div>
            <div className="host-left-container">
                <div className="host-resorts-list">
                    <h2>Your Resorts</h2>
                    <a>LIST OF RESORTS</a>
                </div>
            </div>
        </div>
    )
}

export default HostPage;
