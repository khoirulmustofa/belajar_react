import React, { Component } from 'react';
import Post from '../Post/Post';
import axios from 'axios'

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: '1'
        },
        ifUpdate: false,
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((response) => {
                this.setState({
                    post: response.data,
                });
            });
    };

    handelPostRemove = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3004/posts/${id}`)
            .then((response) => {
                console.log(response);
                this.getPostAPI();
            });
    };

    postDataAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then((response) => {
                console.log(response);
                console.log();
                this.getPostAPI();

            }, (error) => {
                console.log("Error : ", error);
            });
    };

    componentDidMount() {
        this.getPostAPI();

    }

    handelFormChange = (event) => {
        // console.log("handelFormChange", event.target);
        let formBlogPostNew = { ...this.state.formBlogPost };
        // console.log("formBlogPost ", this.state.formBlogPost);
        // console.log("formBlogPostNew ", formBlogPostNew);
        // console.log(event.target.name);

        let timeStamp = new Date().getTime();

        if (!this.state.ifUpdate) {
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;

        // let title = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew

        });
        // , () => {
        //     console.log("value dari obj formBlogPost : ", this.state.formBlogPost);
        // }
        // );

    };

    putDataAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then((response) => {
                console.log(response);
                this.getPostAPI();
            }, (error) => {
                console.log("Error : ", error);
            });
    }

    handelPostUpdate = (data) => {
        console.log("update", data);
        this.setState({
            formBlogPost: data,
            ifUpdate: true
        });

    };

    hanleSubmit = () => {
        if (this.state.ifUpdate) {
            this.putDataAPI();
        } else {
            this.postDataAPI();
        }

        this.setState({
            ifUpdate: false,
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: '1'
            },
        })

        // console.log(this.state.formBlogPost);
    };

    render() {
        return (
            <div>
                <p>Form Post</p>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={this.state.formBlogPost.title} onChange={this.handelFormChange} />
                <br />
                <label htmlFor="body_content">Content</label>
                <textarea name="body" id="body" cols="30" rows="10" onChange={this.handelFormChange} value={this.state.formBlogPost.body}></textarea>
                <br />
                <button onClick={this.hanleSubmit}>Save</button>
                <br />
                <p>Post Berita</p>
                {
                    this.state.post.map(post => {
                        return (
                            <Post key={post.id} data={post} remove={this.handelPostRemove} update={this.handelPostUpdate} />
                        )
                    })
                }

            </div>
        );
    }
}

export default BlogPost;