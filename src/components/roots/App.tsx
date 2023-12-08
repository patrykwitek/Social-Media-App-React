import {FC} from "react";
import { Outlet, 
  Link, 
  useLoaderData 
} from "react-router-dom";
import '../../style/main-page.css';
import '../../style/font.css';
import { getContacts } from "../../actions/contacts";
import { Contact } from "./Contact";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export const App: FC = () => {
  const contacts = useLoaderData();
  
    return(
        <>
          <div id="container">
            <div id="sidebar">
              <div id="search">
                <form id="search-form" role="search">
                  <input
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="q"
                  />
                  <div
                    id="search-spinner"
                    aria-hidden
                    hidden={true}
                  />
                  <div
                    className="sr-only"
                    aria-live="polite"
                  ></div>
                </form>
                <form id="newBtn-form" method="post">
                  <button type="submit" id="newBtn">New</button>
                </form>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link to={`contacts/1`} className="linkTo">Your Name</Link>
                  </li>
                  <li>
                    <Link to={`contacts/2`} className="linkTo">Your Friend</Link>
                  </li>
                </ul>
              </nav>
              <footer>
                Tutorial Project
              </footer>
            </div>
            <div id="detail">
              <Contact />
            </div>
          </div>
        </>
    );
}