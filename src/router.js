import React from "react";
import {HashRouter,Route} from 'react-router-dom';
import App from "./App";
import Admin from "./admin";
import Text from "./page/text";
import Content from "./page/Content";

export default class Router extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    {/* <Route path="/login" component={}></Route> */}
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route exact path="/admin/home" component={Content}></Route>
                            <Route path="/admin/ui/buttons" component={Text}></Route>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}