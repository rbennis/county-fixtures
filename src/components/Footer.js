import { Link } from 'react-router-dom'

const Footer = () => {
    return (    
        <div className="footer">
            <div className="content">
                <div className="footerLeft">
                    <p className="title">Thiobraid Árann</p>
                    <p>
                    Tipperary GAA Office<br />
                    Lár na Páirce<br />
                    Slievenamon Road<br />
                    Thurles, Co. Tipperary
                    </p>
                    <p>
                        <b>E-mail:</b> <a href="mailto:reception.tipperary@gaa.ie">reception.tipperary@gaa.ie</a><br />
                        <b>Phone:</b> <a href="tel:050422702">0504-22702</a><br />
                        <b>Fax:</b> <a href="tel:050424333">0504-24333</a>
                    </p>
                    <p className="copyright">© Tipperary GAA 2022</p>
                </div>
                <div className="footerMiddle">
                    <p className="title">Social Media</p>
                    <p>Stay up to date and follow Tipperary GAA on our social networks:</p>
                    <p>Social links to be added</p>
                </div>
                <div className="footerRight">
                    <p className="title">Munster GAA News</p>
                    <p>Final ‘Get Into Scór Sinsir 2022’ Information Webinar</p>
                    <p>Munster GAA Club Development Grants 2022</p>
                </div>
                </div>
       </div>
     );
}
 
export default Footer;