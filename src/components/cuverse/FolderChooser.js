import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";
import { injectIntl } from "react-intl";
import axios from "axios";

//import { API_ENDPOINT } from "../common/Constants";
import { API_ENDPOINT } from "../../common/Constants";
import PopoverDownloadButton from './PopoverDownloadButton';
//import Filter from "./Filter";
import styles from "./styles";
//import data from "./data.json";

//console.log(data);
//let buketPath = "https://cuengine-portal.s3.eu-west-2.amazonaws.com/cuverse/2/2/english/";
class FolderChooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folderOnly: false,
            isSearch: false,
            isSearching: false,
            searchVal: "",
            currentPath: 'files',
            breadcrumbsUrls: this.generateBreadcrumbs('files'),
            folders: [],
            files: [],
            messageIdtt: "ddddddd",
            data: {},
            projectID: this.props.projectID,
            isAuthenticated: this.props.isAuthenticated

        };

        // this.data = data;
    }

    componentDidMount() {
        const { projectID } = this.props;
        console.log("projectID #", projectID, ' @ ', this.state.projectID);
        axios.get(API_ENDPOINT + 'cuverse/mediaFiles/' + projectID).then((response) => {
            console.log("response.data.data", response.data.data);
            this.setState({
                data: response.data.data
            }, () => {
                //console.log("apiDataset", this.state.apiData)
            })

        }).catch((error) => {
            console.log("error", error);
        })

    }
    
    componentWillUnmount() { }

    toggleSearch = toggle => {
        // search.find("span").hide();
        this.setState({ isSearching: toggle });
    };
    handleSearch = (event, value) => {
        value = value.trim();
        this.setState({ searchVal: value });
        if (value.length === 0) this.toggleSearch(false);
    };
    handleKeyUp = event => {
        console.log("keyup....");
        if (event.keyCode === 27) {
            // search.trigger("focusout");
            this.Filter.focusout();
        }
    };
    handleFocusOut = event => {
        console.log("focus out");
        if (!this.state.searchVal.length) this.setState({ isSearching: false });
    };
    handleClickFolders = nextDir => event => {
        event.preventDefault();
        console.log("handleClickFolders =", nextDir);

        var breadcrumbsUrls = this.state.breadcrumbsUrls;

        if (this.state.isSearching) {
            // Building the breadcrumbs
            breadcrumbsUrls = this.generateBreadcrumbs(nextDir);
            this.toggleSearch(false);
        } else {
            breadcrumbsUrls.push(nextDir);
        }
        console.log("update breadcrumbsUrls =", breadcrumbsUrls);
        this.setState({ currentPath: nextDir, breadcrumbsUrls: breadcrumbsUrls });
    };

    handleSelectFolders = nextDir => event => {
        event.preventDefault();
        this.setState({ selected: nextDir });
    };
    handleBreadcrumbsClick = index => event => {
        var breadcrumbsUrls = this.state.breadcrumbsUrls;
        var url = breadcrumbsUrls[index];

        breadcrumbsUrls = this.generateBreadcrumbs(url);
        this.setState({ breadcrumbsUrls: breadcrumbsUrls, currentPath: url });
    };

    // Splits a file path and turns it into clickable breadcrumbs
    generateBreadcrumbs = nextDir => {
        var path = nextDir.split("/").slice(0);
        for (var i = 1; i < path.length; i++) {
            path[i] = path[i - 1] + "/" + path[i];
        }
        return path;
    };

    // Locates a file by path
    searchByPath = dir => {
        var path = dir.split("/"),
            demo = [this.state.data],
            flag = 0;

        for (var i = 0; i < path.length; i++) {
            for (var j = 0; j < demo.length; j++) {
                if (demo[j].name === path[i]) {
                    flag = 1;
                    demo = demo[j].items;
                    break;
                }
            }
        }

        demo = flag ? demo : [];
        return demo;
    };

    // Recursively search through the file tree
    searchData = (data, searchTerms) => {
        var folders = [];
        var files = [];
        var self = this;
        data.forEach(function (d) {
            if (d.type === "folder") {
                self.searchData(d.items, searchTerms);

                if (d.name.toLowerCase().match(searchTerms)) {
                    folders.push(d);
                }
            } else if (d.type === "file") {
                if (d.name.toLowerCase().match(searchTerms)) {
                    files.push(d);
                }
            }
        });

        return { folders: folders, files: files };
    };

    // This function escapes special html characters in names
    escapeHTML = text => {
        return text
            .replace(/\&/g, "&amp;")
            .replace(/\</g, "&lt;")
            .replace(/\>/g, "&gt;");
    };

    // Convert file sizes from bytes to human readable units
    bytesToSize = bytes => {
        var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        if (bytes == 0) return "0 Bytes";
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
    };

    getFilteredData = () => {
        if (this.state.isSearching) {
            console.log("Search Data ");
            return this.searchData([this.state.data], this.state.searchVal);
        } else {
            return this.searchByPath(this.state.currentPath);
        }
    };



    render() {
        
        if (!this.state.data) {
            return "Loading...";
        }
        const { classes, intl } = this.props;

        var filteredData = this.getFilteredData();
        var scannedFolders = [];
        var scannedFiles = [];
        const test = 1000;

        if (Array.isArray(filteredData)) {
            filteredData.forEach(function (d) {
                if (d.type === "folder") {
                    scannedFolders.push(d);
                } else if (d.type === "file") {
                    scannedFiles.push(d);
                }
            });
        } else if (typeof filteredData === "object") {
            scannedFolders = filteredData.folders;
            scannedFiles = filteredData.files;
        }

        const getFileDownload = (row) => {
            console.log("row.mime_type ", row.mime_type, row.path);
            let fileURL = row.path;
            let fileName = row.name;

            fetch(fileURL)
                .then(resp => resp.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    // the filename you want
                    a.download = fileName;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    // alert('your file has downloaded!'); // or you know, something with better UX...
                })
                .catch(() => alert('oh no!'));

            // var anchor = document.createElement('a');
            // anchor.href = row.path;
            // anchor.target = '_blank';
            // anchor.download = row.name;
            // anchor.click();
            // document.body.removeChild(anchor);

            // function forceDownload(href) {
            // var anchor = document.createElement('a');
            // anchor.href = row.path;
            // anchor.download = row.name;
            // document.body.appendChild(anchor);
            // anchor.click();
            // document.body.removeChild(anchor);
            //}


        };


        return (
            <div className={classes.root}>
                <div
                    className={clsx(
                        classes.filemanager,
                        this.state.isSearching && "searching"
                    )}
                >
                    {/* <div
                        className={classes.search}
                        onClick={() => {
                            this.toggleSearch(true);
                        }}
                    >
                        {this.state.isSearching && (
                            <Filter
                                updateFilter={this.handleSearch}
                                onKeyUp={this.handleKeyUp}
                                onFocusOut={this.handleFocusOut}
                                value={this.state.searchVal}
                                placeholder={intl.formatMessage(
                                    {
                                        id: "messageIdtt",
                                        defaultMessage: `Hello {name}, you have {unreadCount, number} {unreadCount, plural, one {message}  other {messages} }`
                                    },
                                    { name: <b>{"fvd"}</b>, test }
                                )}
                                ref={input => {
                                    this.Filter = input;
                                }}
                            />
                        )}
                    </div> */}

                    <div className={classes.breadcrumbs}>
                        {this.state.isSearching ? (
                            <span>Search results: </span>
                        ) : (
                            this.state.breadcrumbsUrls.map((u, idx) => {
                                var name = u.split("/");
                                return (
                                    <div style={{ display: "inline-block" }} key={idx}>
                                        {idx !== this.state.breadcrumbsUrls.length - 1 && (
                                            <a onClick={this.handleBreadcrumbsClick(idx)}>
                                                <span className="folderName">
                                                    {name[name.length - 1]}
                                                </span>
                                            </a>
                                        )}
                                        {idx !== this.state.breadcrumbsUrls.length - 1 && (
                                            <span className="arrow">→</span>
                                        )}
                                        {idx === this.state.breadcrumbsUrls.length - 1 && (
                                            <span className="folderName">
                                                {name[name.length - 1]}
                                            </span>
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>

                    <div
                        className={clsx(
                            classes.data,
                            !this.state.isSearching && "animated row"
                        )}
                    >
                        {scannedFolders.map((f, idx) => {
                            var itemsLength = f.items.length,
                                name = this.escapeHTML(f.name);
                            if(itemsLength===0){
                                return (<></>);
                            }
                            return (
                                <div
                                    className="folders fileFolders col-sm-6"
                                    onClick={this.handleSelectFolders(f.path)}
                                    onClick={this.handleClickFolders(f.path)}
                                    key={idx}
                                >
                                    <a title={f.path} className="folders">
                                        <div className="row align-items-center ">
                                            <div className="col-4 position-relative">
                                                <span
                                                    className={clsx(
                                                        classes.icon,
                                                        classes.folder,
                                                        itemsLength && "full"
                                                    )}
                                                />
                                                {f.path === this.state.selected && (
                                                    <span className={clsx(classes.icon, classes.selected)} />
                                                )}
                                            </div>
                                            <div className="col-7">
                                                <div className="fileFolderContent">
                                                    <div className="name">{name}</div>
                                                    <div className="details">
                                                        {itemsLength +
                                                            (itemsLength === 1
                                                                ? " item"
                                                                : itemsLength > 1
                                                                    ? " items"
                                                                    : " Empty")}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                        {scannedFiles.map((f, idx) => {
                            var fileSize = this.bytesToSize(f.size);
                            var name = this.escapeHTML(f.name);
                            var fileType = name.split(".");
                            fileType = fileType[fileType.length - 1];

                            return (
                                <div
                                    className={clsx(
                                        "files col-sm-6 filesBox",
                                        this.state.folderOnly && "unselectable"
                                    )}
                                    key={idx}
                                >
                                    <a className="files">
                                        <div className="row align-items-center">
                                            <div className="col-4 text-center  position-relative">                                                
                                                {[''].includes(fileType) || fileType.toLowerCase() === 'jpg'|| fileType.toLowerCase() === 'jpeg' ?
                                                <>
                                                    <p>Name = {f.path}</p>
                                                    <img src={f.path} width={80} height={80} alt={f.name} className="img-fluid" />
                                                </>
                                                :
                                                <>
                                                <span
                                                    className={clsx(
                                                        classes.icon,
                                                        classes.file,
                                                        "f-" + fileType.toLowerCase()
                                                    )}
                                                >
                                                    {fileType}
                                                </span>
                                                </>
                                                }
                                                
                                            </div>
                                            <div className="col-8">
                                                <span className="name"><span title="click to preview" href="">{name}</span></span>
                                                <span className="details"> ({fileSize}) </span>
                                                <div className="d-flex mt-1 justify-content-between">
                                                    <div className="download">
                                                        <PopoverDownloadButton row={f}>
                                                            Download
                                                        </PopoverDownloadButton>
                                                     {/* <button className="btn btn-sm btn-primary align-items-center mb-3" onClick={() => getFileDownload(f)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                         <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                         <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                     </svg> Download</button> */}
                                                    </div>
                                                    {/* <div className="previewEye">
                                                    <a title="click to preview" target="_blank" href={buketPath + name}><img src="../assets/images/eye.svg"></img></a>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </div>

                    {scannedFolders.length === '' && (
                            <div className={classes.nothingfound}>
                                <div className="nofiles" />
                                <div className="noFilesDiv">No files here.</div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

FolderChooser.propTypes = {
    classes: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    projectID: PropTypes.number.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,

};

export default injectIntl(withStyles(styles)(FolderChooser));
