import React, {useState} from 'react';

import FileItem from './FileItem/FileItem';
import Button from '../UI/Button/Button';

import './ProjectHierarchy.css'

const ProjectHierarchy = (props) => {
    const[updatedClasses, setUpdatedClasses]  = useState('caret nav-Button');

    const toggleCarret = (carret) => {
        console.log(carret);
        console.log(carret.target.className);
        const classes = carret.target.className;
        let toggledClasses = '';
        console.log(classes.includes('caret-down'));
        if (classes.includes('caret-down')) {
            toggledClasses = 'caret nav-button';
        } else {
            toggledClasses = 'caret nav-button caret-down';
        }
        setUpdatedClasses(toggledClasses);
        console.log(toggledClasses);
        // if ($(carret).hasClass('caret-down')) {
        //   $(carret).removeClass('caret-down');
        //   $(carret).parent().find('.nested').first().removeClass('active');
        // } else {
        //   $(carret).addClass('caret-down');
        //   $(carret).parent().find('.nested').first().addClass('active');
        // }
        
    }

    return (
        <div>
            <ul id="myUL" projectdir="F:/project/electron-demo/Project Data/project10">
                <FileItem>
                    <span className={updatedClasses} onClick={toggleCarret.bind(this)}>1.0 CLIENT</span>
                    <ul className="nested">
                        <FileItem>
                            <span className={updatedClasses} onClick={(event) => toggleCarret(event)}>1.1 BRIEF</span>
                            <ul className="nested">
                                <FileItem><Button className="openfileupload" click={() => toggleCarret(this)} folderpath="F:/project/electron-demo/Project Data/project10/1.0 CLIENT/1.1 BRIEF">Add File</Button></FileItem>
                            </ul>
                        </FileItem>
                        <FileItem>
                            <span className={updatedClasses} onClick={() => toggleCarret(this)}>1.2 CHANGES</span>
                            <ul className="nested">
                            <FileItem>
                                <span className={updatedClasses} onClick={() => toggleCarret(this)}>Received</span>
                                <ul className="nested">
                                    <FileItem><Button className="openfileupload" click={() => toggleCarret(this)} folderpath="F:/project/electron-demo/Project Data/project10/1.0 CLIENT/1.2 CHANGES/Received">Add File</Button></FileItem>
                                </ul>
                            </FileItem>
                            <FileItem>
                                <span className={updatedClasses} onClick={() => toggleCarret(this)}>Sent</span>
                                <ul className="nested">
                                    <FileItem><Button className="openfileupload" click={() => toggleCarret(this)} folderpath="F:/project/electron-demo/Project Data/project10/1.0 CLIENT/1.2 CHANGES/Sent">Add File</Button></FileItem>
                                </ul>
                            </FileItem>
                            </ul>
                        </FileItem>
                    </ul>
                </FileItem>
                <FileItem>
                    <span className={updatedClasses} onClick={() => toggleCarret(this)}>2.0 PROPERTY INFO</span>
                    <ul className="nested">
                        <FileItem>
                            <span className={updatedClasses} onClick={() => toggleCarret(this)}>2.1 GEOMAPS DATA</span>
                            <ul className="nested">
                            <FileItem><Button className="openfileupload" click={() => toggleCarret(this)} folderpath="F:/project/electron-demo/Project Data/project10/2.0 PROPERTY INFO/2.1 GEOMAPS DATA">Add File</Button></FileItem>
                            </ul>
                        </FileItem>
                        <FileItem>
                            <span className={updatedClasses} onClick={() => toggleCarret(this)}>2.2 PROPERTY FILE</span>
                            <ul className="nested">
                            <FileItem><Button className="openfileupload" click={() => toggleCarret(this)} folderpath="F:/project/electron-demo/Project Data/project10/2.0 PROPERTY INFO/2.2 PROPERTY FILE">Add File</Button></FileItem>
                            </ul>
                        </FileItem>
                        <FileItem>
                            <span className={updatedClasses} onClick={() => toggleCarret(this)}>2.3 SITE PHOTOS</span>
                            <ul className="nested">
                            <FileItem><Button className="openfileupload" click={() => toggleCarret(this)} folderpath="F:/project/electron-demo/Project Data/project10/2.0 PROPERTY INFO/2.3 SITE PHOTOS">Add File</Button></FileItem>
                            </ul>
                        </FileItem>
                    </ul>
                </FileItem>
            </ul>
        </div>
    );
}

export default ProjectHierarchy;