import "./Dashboard.css";
import premiumIcon from "../../assests/PremiumIcon.png";
import personalPicture from "../../assests/PersonalPicture.png"
import InputForm from "../form/inputForm";
import { Checkbox } from "@mui/material";

export const Dashboard = () => {
  return (
    <div className="dashboardMainContainer">
      <div className="premiumHead">
        <span className="premiumIcon">
          <img src={premiumIcon} alt="premiumIcon"></img>
        </span>
        <span>
          <div className="premiumAccountTag">Premium Account</div>
          <span className="premiumAccountContent" >
            You have a premium account, granting you access to all the
            remarkable features offered by ResumeDone. With this privilege,
            you can indulge in the freedom of downloading an unlimited number
            of resumes and cover letters in both PDF and Word formats.
          </span>
        </span>
      </div>
      <div className="personalInformationHead">
        <span className="personalInformation">Personal Information</span>
        <div className="personalInformationInputForm">
          <InputForm />
          <span className="personalpicture"><img src={personalPicture} alt="personalPicture"></img></span>
        </div>
      </div>
      <div className="showMyProfile">
        <span><Checkbox /></span>
        <span className="hirethesbestIOTag">Show my profile to serious employers on <span className="hirethesbestIO">hirethesbest.io</span>  for free</span>
      </div>
      <div className="deleteAccounthead">
        <span className="deleteAccount">Delete account</span>
        <span className="deleteAccountConfirmation">If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.</span>
        <span className="yesDelete">Yes, Delete my account</span>
      </div>
      <div className="fAndQhead">
        <span className="getInTouchTag"><span className="getInTouchTagLine">Get in touch with our support team </span>if you have any question or want to leave some feedback.
          We’ll be happy to hear from you.</span>
        <div><span className="getInTouchBorder"></span></div>
        <div className="fAndQHeadTag">
          <span className="fAndQTags">Terms & Conditions</span>
          <span className="fAndQTags">Privacy Policy</span>
          <span className="fAndQTags">FAQ</span>
          <span className="fAndQTags">Contact Us</span>
        </div>
      </div>
    </div>
  );
};
