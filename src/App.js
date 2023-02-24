import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addedcompany from './Component/Addedcompany';
import "./css/font.css";
import "./css/styles.css";
import "./css/custom.css";
import SignUp from './Component/SignUP';
import Authorization from './Component/Authorization';
import AuthorizedCompany from './Component/AuthorizeCompany';
import FormDuke from './Component/FormDuke210.js';
import SignupContacts from './Component/SignupContacts';
import NewApplication from './Component/NewApplication';

function App() {
  return (<>
    <BrowserRouter>

<Routes>
  <Route >
  <Route path="/" element={<SignUp/>} />
    <Route path="newapplication" element={<NewApplication />}/>
    <Route path="signupContacts" element={<SignupContacts/>} />
    <Route path="authorization" element={<Authorization />}/>
    <Route path="authorizedCompany" element={<AuthorizedCompany />} />
    <Route path="formDuke" element={<FormDuke />} />
    <Route path="addedcompany" element={<Addedcompany />} />
    {/* <Route path="*" element={<NoPage />} /> */}
  </Route>
</Routes>
</BrowserRouter>
  </>

    
  );
}

export default App;
