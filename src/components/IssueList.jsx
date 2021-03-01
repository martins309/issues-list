import React, { Component } from 'react';
import Issue from './Issue';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issueData: []
        }
    }


    _loadData = async () => {
        const data = await fetch('https://api.github.com/repos/facebook/create-react-app/issues').then(response => response.json());
        return data;
    }


    async componentDidMount() {
        const apiData = await this._loadData();
        this.setState({
            issueData: apiData
        });
    }


    render() {
        const { issueData } = this.state;
        console.log(issueData);
        return (
            <div>
                {!!issueData.length ? (
                    issueData.map((issue) => {
                    return <Issue issue={issue.title} key={issue.id}/>
                    })
                ) : (
                    <li>Loading Issues List </li>
                )}
            </div>
        );
    }


}






export default IssueList;