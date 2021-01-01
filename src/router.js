import React from "react";
import {HashRouter,Route} from 'react-router-dom';
import App from "./App";
import Admin from "./admin";
import Content from "./page/Content";
import Button from "./page/Button";
import Model from "./page/Model";
import Spins from "./page/Spins/index";
import Notification from "./page/Notification";
import Message from "./page/Message";
import Tabs from "./page/tab";
import Form from "./page/form/login";
import Res from "./page/form/index2";
import BaseTable from "./page/table/baseTable";

export default class Router extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    {/* <Route path="/login" component={}></Route> */}
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route exact path="/admin/home" component={Content}></Route>
                            <Route path="/admin/ui/buttons" component={Button}></Route>
                            <Route path="/admin/ui/modals" component={Model}></Route>
                            <Route path="/admin/ui/loadings" component={Spins}></Route>
                            <Route path="/admin/ui/notification" component={Notification}></Route>
                            <Route path="/admin/ui/messages" component={Message}></Route>
                            <Route path="/admin/ui/tabs" component={Tabs}></Route>
                            <Route path="/admin/form/login" component={Form}></Route>
                            <Route  path="/admin/form/reg" component={Res}></Route>
                            <Route path="/admin/table/basic" component={BaseTable}></Route>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}