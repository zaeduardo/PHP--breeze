import "bootstrap/dist/css/bootstrap.min.css"


function DropDowTask() {
    return (
        <>
            <div class="btn-group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Task's
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">Action</button>
                    <button class="dropdown-item" type="button">Another action</button>
                    <button class="dropdown-item" type="button">Something else here</button>
                </div>
            </div>

        </>
    )
}


export default DropDowTask