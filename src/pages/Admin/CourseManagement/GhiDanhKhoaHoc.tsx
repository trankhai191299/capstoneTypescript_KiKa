type Props = {}
export default function GhiDanhKhoaHoc({}: Props) {
  return (
    <div>
        <div className="modal-header">
          <h5 className="modal-title" id="modalTitleId">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="container-fluid">
            Add rows here
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
    </div>
  )
}