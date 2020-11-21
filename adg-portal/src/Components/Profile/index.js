import React, { Component } from 'react';
import './index.css';

class index extends Component {
    render() {
        return (
            <div>
                <div class="heading">
                    <h1>Profile</h1>
                </div>
                <div class="details">
                    <div class="image-section">
                        <div class="image">
                            <div class="image-card">Profile Image</div>
                        </div>
                    </div>
                    <div class="info">
                        <div class="card">
                            <div class="names">
                                <div class="name">
                                    <h3>Name</h3><br></br>
                                    <i>Name</i>
                                </div>
                                <div class="username">
                                    <h3>Username</h3><br></br>
                                    <i>Username</i>
                                </div>
                            </div>
                            <br></br><br></br>
                            <div class="bio">
                                <h3>Bio</h3><br></br>
                                <i>Bio</i>
                            </div>
                            <br></br>
                            <br></br>
                            <div class="email">
                                <h3>Email</h3><br></br>
                                <i>Email</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default index;
