import {FC} from "react";
import { Form } from "react-router-dom";
import '../../style/contact-page.css';
import '../../style/font.css';

export const Contact: FC = () => {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="contact">
      <div id="profileImage">
        <img
          key={contact.avatar}
          src={contact.avatar}
        />
      </div>

      <div id="profileInfo">
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          {/*<Favorite contact={contact} />*/}
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div id="profilePageButtons">
          <Form action="edit">
            <button type="submit" id="editProfileBtn">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
                event.preventDefault();
            }}
          >
            <button type="submit" id="deleteProfileBtn">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

/*function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}*/