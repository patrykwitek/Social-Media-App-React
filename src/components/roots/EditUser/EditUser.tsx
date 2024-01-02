import './style.scss';
import '../../../style/font.css';
import { useAuth } from '../../../hooks/Auth/Auth';
import { useState } from 'react';
import { LiaUserEditSolid } from "react-icons/lia";
import { BiUser, BiSolidUserAccount } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { HiOutlinePhone, HiCheckCircle } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { PiAddressBook } from "react-icons/pi";
import { TbLocation } from "react-icons/tb";
import { TiLocation } from "react-icons/ti";
import { MdLocationCity } from "react-icons/md";
import { RiPriceTagLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export const EditUser = () => {
    const auth = useAuth();
    
    const [username, setUsername] = useState(auth.user?.username);
    const [name, setName] = useState(auth.user?.name);
    const [mail, setMail] = useState(auth.user?.email);
    const [phone, setPhone] = useState(auth.user?.phone);
    const [website, setWebsite] = useState(auth.user?.website);
    const [addressStreet, setAddressStreet] = useState(auth.user?.address.street);
    const [addressSuite, setAddressSuite] = useState(auth.user?.address.suite);
    const [addressCity, setAddressCity] = useState(auth.user?.address.city);
    const [addressZipcode, setAddressZipcode] = useState(auth.user?.address.zipcode);
    const [addressLongitude, setAddressLongitude] = useState(auth.user?.address.geo.lng);
    const [addressLatitude, setAddressLatitude] = useState(auth.user?.address.geo.lat);
    const [companyName, setCompanyName] = useState(auth.user?.company.name);
    const [companyCatchPhrase, setCompanyCatchPhrase] = useState(auth.user?.company.catchPhrase);
    const [companyBs, setCompanyBs] = useState(auth.user?.company.bs);

    const navigate = useNavigate();
    
    const handleSubmit = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${auth.user?.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: auth.user?.id,
                name: name,
                username: username,
                email: mail,
                address: {
                    street: addressStreet,
                    suite: addressSuite,
                    city: addressCity,
                    zipcode: addressZipcode,
                    geo: {
                        lat: addressLatitude,
                        lng: addressLongitude
                    }
                },
                phone: phone,
                website: website,
                company: {
                    name: companyName,
                    catchPhrase: companyCatchPhrase,
                    bs: companyBs
                }
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        navigate(`/user/${auth.user?.id}/photos`);
    }

    return (
        <div className='edit-user-page'>
            <div className='edit-user-form'>
                <div className='form-title'>
                    Edit Profile <LiaUserEditSolid className='icon-title' />
                </div>
                <div className='form-section'>
                    <div className='section-heading'>
                        General Information
                    </div>
                    <div className='section-content'>
                        <div className='row'>
                            <BiUser className='icon' />
                            Username:
                            <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className='row'>
                            <BiSolidUserAccount className='icon' />
                            Name & Surname:
                            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className='row'>
                            <LuMail className='icon' />
                            Email:
                            <input type='text' value={mail} onChange={(event) => setMail(event.target.value)} />
                        </div>
                        <div className='row'>
                            <HiOutlinePhone className='icon' />
                            Phone:
                            <input type='text' value={phone} onChange={(event) => setPhone(event.target.value)} />
                        </div>
                        <div className='row'>
                            <CgWebsite className='icon' />
                            Website:
                            <input type='text' value={website} onChange={(event) => setWebsite(event.target.value)} />
                        </div>
                    </div>
                    <div className='section-heading'>
                        Address
                    </div>
                    <div className='section-content'>
                        <div className='row'>
                            <PiAddressBook className='icon' />
                            Street:
                            <input type='text' value={addressStreet} onChange={(event) => setAddressStreet(event.target.value)} />
                        </div>
                        <div className='row'>
                            <TiLocation className='icon' />
                            Suite:
                            <input type='text' value={addressSuite} onChange={(event) => setAddressSuite(event.target.value)} />
                        </div>
                        <div className='row'>
                            <MdLocationCity className='icon' />
                            City:
                            <input type='text' value={addressCity} onChange={(event) => setAddressCity(event.target.value)} />
                        </div>
                        <div className='row'>
                            <RiPriceTagLine className='icon' />
                            Zipcode:
                            <input type='text' value={addressZipcode} onChange={(event) => setAddressZipcode(event.target.value)} />
                        </div>
                        <div className='row'>
                            <TbLocation className='icon' />
                            Longitude:
                            <input type='text' value={addressLongitude} onChange={(event) => setAddressLongitude(event.target.value)} />
                        </div>
                        <div className='row'>
                            <TbLocation className='icon' />
                            Latitude:
                            <input type='text' value={addressLatitude} onChange={(event) => setAddressLatitude(event.target.value)} />
                        </div>
                    </div>
                    <div className='section-heading'>
                        Company
                    </div>
                    <div className='section-content'>
                        <div className='row'>
                            <PiAddressBook className='icon' />
                            Name:
                            <input type='text' value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
                        </div>
                        <div className='row'>
                            <TiLocation className='icon' />
                            Catch Phrase:
                            <input type='text' value={companyCatchPhrase} onChange={(event) => setCompanyCatchPhrase(event.target.value)} />
                        </div>
                        <div className='row'>
                            <MdLocationCity className='icon' />
                            BS:
                            <input type='text' value={companyBs} onChange={(event) => setCompanyBs(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='submit-button-section'>
                    <button onClick={handleSubmit}>
                        Submit <HiCheckCircle className='submit-icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}