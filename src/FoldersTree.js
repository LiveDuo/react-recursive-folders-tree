import React from 'react'

const toggleFolder = (el) => {
	const isexpanded = el.dataset.isexpanded == 'true'
	el.classList.add(isexpanded ? 'fa-folder' : 'fa-folder-o')
	el.classList.remove(isexpanded ? 'fa-folder-o' : 'fa-folder')
	el.dataset.isexpanded = !isexpanded

	Array.from(el.parentElement.children).forEach((el3) => {
    const els = el3.querySelectorAll(".file,.folder-container,.no-items")[0]
    if (els) {
      els.style.display = isexpanded ? 'none' : 'block'
    }
	})
}

const Folder = (props) => (<span onClick={(e) => toggleFolder(e.target)} className="folder fa-folder-o" data-isexpanded='true'>{props.name}</span>)

const File = (props) => (<span onClick={() => console.log(props.endpoint)} className="file fa-file-code-o">{props.endpoint.name}</span>)

const FoldersTree = (props) =>
	props.endpoints.map((endpoint, index) => (
    <div key={index}>
			{endpoint.children.length ? 
				<div className="folder-container">
					<Folder name={endpoint.name}/>
					<FoldersTree endpoints={endpoint.children}/>
				</div> : 
				<div>
					<File endpoint={endpoint} />
				</div>}
    </div>
			
  ))
  
export { FoldersTree }