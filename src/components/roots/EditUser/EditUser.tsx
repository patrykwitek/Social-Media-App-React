import './style.scss';
import '../../../style/font.css';
import { useAuth } from '../../../hooks/Auth/Auth';
import { useState } from 'react';
import { LiaUserEditSolid } from "react-icons/lia";
import { BiUser, BiSolidUserAccount } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { HiOutlinePhone } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { PiAddressBook } from "react-icons/pi";
import { TbLocation } from "react-icons/tb";
import { TiLocation } from "react-icons/ti";
import { MdLocationCity } from "react-icons/md";
import { RiPriceTagLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { SubmitButton } from '../../common/SubmitButton/SubmitButton';
import { useTranslation } from 'react-i18next';

export const EditUser = () => {
    const auth = useAuth();
    const [translation, i18n] = useTranslation("global");

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
            .then((response) => response.json());

        navigate(`/user/${auth.user?.id}/photos`);
    }

    return (
        <div className='edit-user-page'>
            <div className='edit-user-form'>
                <div className='form-title'>
                    {translation("editProfile")} <LiaUserEditSolid className='icon-title' />
                </div>
                <div className='form-section'>
                    <div className='section-heading'>
                        {translation("generalInformation")}
                    </div>
                    <div className='section-content'>
                        <div className='row'>
                            <BiUser className='icon' />
                            {translation("username")}:
                            <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className='row'>
                            <BiSolidUserAccount className='icon' />
                            {translation("nameAndSurname")}:
                            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className='row'>
                            <LuMail className='icon' />
                            {translation("email")}:
                            <input type='text' value={mail} onChange={(event) => setMail(event.target.value)} />
                        </div>
                        <div className='row'>
                            <HiOutlinePhone className='icon' />
                            {translation("phone")}:
                            <input type='text' value={phone} onChange={(event) => setPhone(event.target.value)} />
                        </div>
                        <div className='row'>
                            <CgWebsite className='icon' />
                            {translation("website")}:
                            <input type='text' value={website} onChange={(event) => setWebsite(event.target.value)} />
                        </div>
                    </div>
                    <div className='section-heading'>
                        {translation("address")}
                    </div>
                    <div className='section-content'>
                        <div className='row'>
                            <PiAddressBook className='icon' />
                            {translation("street")}:
                            <input type='text' value={addressStreet} onChange={(event) => setAddressStreet(event.target.value)} />
                        </div>
                        <div className='row'>
                            <TiLocation className='icon' />
                            {translation("suite")}:
                            <input type='text' value={addressSuite} onChange={(event) => setAddressSuite(event.target.value)} />
                        </div>
                        <div className='row'>
                            <MdLocationCity className='icon' />
                            {translation("city")}:
                            <input type='text' value={addressCity} onChange={(event) => setAddressCity(event.target.value)} />
                        </div>
                        <div className='row'>
                            <RiPriceTagLine className='icon' />
                            {translation("zipcode")}:
                            <input type='text' value={addressZipcode} onChange={(event) => setAddressZipcode(event.target.value)} />
                        </div>
                        <div className='row'>
                            <TbLocation className='icon' />
                            {translation("longitude")}:
                            <input type='text' value={addressLongitude} onChange={(event) => setAddressLongitude(event.target.value)} />
                        </div>
                        <div className='row'>
                            <TbLocation className='icon' />
                            {translation("latitude")}:
                            <input type='text' value={addressLatitude} onChange={(event) => setAddressLatitude(event.target.value)} />
                        </div>
                    </div>
                    <div className='section-heading'>
                        {translation("company")}
                    </div>
                    <div className='section-content'>
                        <div className='row'>
                            <PiAddressBook className='icon' />
                            {translation("name")}:
                            <input type='text' value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
                        </div>
                        <div className='row'>
                            <TiLocation className='icon' />
                            {translation("catchPhrase")}:
                            <input type='text' value={companyCatchPhrase} onChange={(event) => setCompanyCatchPhrase(event.target.value)} />
                        </div>
                        <div className='row'>
                            <MdLocationCity className='icon' />
                            {translation("bs")}:
                            <input type='text' value={companyBs} onChange={(event) => setCompanyBs(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='submit-button-section'>
                    <SubmitButton onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}