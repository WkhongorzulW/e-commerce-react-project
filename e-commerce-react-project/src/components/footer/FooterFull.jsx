import { FooterNavFunc, MainFooterFunc } from "./MainFooterFunc";
import { FooterTopFunc } from "./FooterTopFunc";
import FooterChildrenFunc from "./FooterChidren";
import { footerTop, mainFooter, footerChildren } from "../Data";

export default function FooterFull() {
  const fTop = footerTop.map((item) => {
    return (
      <FooterTopFunc
        title={item.title}
        email={item.email}
        emailIcon={item.emailIcon}
        hPhoneIcon={item.hPhoneIcon}
        text={item.text}
        phNumber={item.phNumber}
      />
    );
  });

  const mFooter = mainFooter.map((item) => {
    return (
      <MainFooterFunc
        logo={item.logo}
        address={item.address}
        social={item.social}
      />
    );
  });

  const fNavWithChildren = footerChildren.map((child) => {
    const children = child.data.map((d) => {
      return <FooterChildrenFunc title={d.title} />;
    });
    return (
      <div className="col">
        <FooterNavFunc title={child.header} />
        {children}
      </div>
    );
  });

  return (
    <div className="footer blue-6">
      <div className="footer-top inner-box mx-auto">{fTop}</div>

      <div className="main-footer inner-box mx-auto row mt-5">
        <div className="col-2">{mFooter}</div>
        <div className="col-1"></div>
        <div className="col footer-nav">
          <div className="row">{fNavWithChildren}</div>
        </div>
      </div>
    </div>
  );
}
