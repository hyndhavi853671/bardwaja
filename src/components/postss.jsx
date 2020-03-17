import React, { Component } from "react";
//import axios from "axios";
import http from "../services/httpService";
import PostTable from "./postss-table";
import { toast } from "react-toastify";
import Pagination from "react-js-pagination";
import _ from "lodash";
const baseUrl = "https://jsonplaceholder.typicode.com";
class Posts extends Component {
  constructor() {
    super();
    console.log("inside constructor");
  }
  state = {
    posts: [],
    activePage: 1,
    pageSize: 10,
    loading: true,
    post: [],
    pageSize: 10,
    selectedPage: 1
  };
  componentWillUnmount() {
    console.log("inside componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("inside componentDidUpdate");
  }

  async componentDidMount() {
    console.log("inside componentDidMount");
    const promise = await http.get(baseUrl + "/posts");
    console.log(promise);
    this.setState({ posts: promise.data });
  }

  addPost = async () => {
    console.log("inside addpost");
    const obj = { title: "New Title", body: "sdsffff" };
    const response = await http.post(baseUrl + "/posts", obj);
    console.log(response);
    const posts = [obj, ...this.state.posts];
    this.setState({ posts });
  };
  getPost = id => {
    const po = this.state.posts.filter(p1 => p1.id === id);
    console.log(po);
    this.setState({ post: po[0] });
  };

  deletePost = async post => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    try {
      await http.delete(baseUrl + "/posts/" + post.id);
    } catch (err) {
      console.log("error:" + err);
      if (err.response && err.response.status == 200) {
        toast("post has been deleted");
      } else {
        toast("Failed to delete due to unknown error");
        this.setState({ posts: originalPosts });
      }
    }
  };

  updatePost = async post => {
    post.title = "New Title";
    const response = http.put(baseUrl + "/posts/" + post.id, post);
    //await axios.patch(baseUrl + "posts/" + post.id, {title: "New Title"});
    console.log(response);
    const post1 = this.state.posts;
    const indx = this.state.posts.indexOf(post1);
    const posts = this.state.posts;
    posts[indx] = (await response).data;
    this.setState({ posts });
  };

  handleInputField = event => {
    console.log("Inside handleInputField");
    const post = this.state.post;
    const { name, value } = event.currentTarget;
    post[name] = value;
    this.setState({ post });
  };

  render() {
    console.log("inside render");
    return (
      <div>
        <PostTable
          posts={this.state.posts}
          addPost={this.addPost}
          updatePost={this.updatePost}
          getPost={this.getPost}
          deletePost={this.deletePost}
          post={this.state.post}
          handleInputField={this.handleInputField}
        />
      </div>
    );
  }
}
export default Posts;
