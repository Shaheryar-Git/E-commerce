const Footer = () => {
  return (
    <footer id="footer" style={{backgroundColor:"#191919"}}>
  <div className="footer-top text-white py-4">
    <div className="container">
      <div className="row">
        {/* Footer Logo */}
        <div className="col-lg-3 col-md-6 mb-4">
            <img src="\Assets\Shoes\WhatsApp Image 2024-12-09 at 18.19.38_7d96ac24.jpg" alt="DigiSkills Logo" className="img-fluid" 
							width={250}
						 />
        </div>
        {/* Useful Links */}
        <div className="col-lg-3 col-md-6 ">
          <h4 className="fw-bold">Sneakers TYPES</h4>
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled fw-bolder">
                <li><i className="bx bx-chevron-right" /> Air Jordan 1 </li>
                <li><i className="bx bx-chevron-right" /> Air Jordan 4</li>
                <li><i className="bx bx-chevron-right" /> High-Top Sneaker</li>
                <li><i className="bx bx-chevron-right" /> Nike Blazer</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled fw-bolder">
              <li><i className="bx bx-chevron-right" /> Nike Collaboration</li>
                <li><i className="bx bx-chevron-right" /> Nike Dunk Low</li>
                <li><i className="bx bx-chevron-right" /> Louis Vuitton Trainer</li>
                <li><i className="bx bx-chevron-right" /> Nike SB Dunk</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="col-lg-3 col-md-6 ">
          <h4 className="fw-bolder">Contact Solebazar</h4>
          <ul className="list-unstyled">
            <li><i className="fa fa-phone" /> Phone: 0304-111-1570</li>
            <li><i className="fa fa-envelope" /> Email: info@dSolebazar.pk</li>
          </ul>
        </div>
        {/* Social Links */}
        <div className="col-lg-3 col-md-6 ">
          <h4 className="fw-bolder">Follow Us</h4>
          <div className="d-flex ms-5">
            <a href="https://www.facebook.com/digiskillspakistan" target="_blank" className="btn btn-outline-primary btn-sm mx-1">
              <i className="fa fa-facebook" />
            </a>
            <a href="http://www.linkedin.com/company/digiskillspakistan" target="_blank" className="btn btn-outline-primary btn-sm mx-1">
              <i className="fa fa-linkedin" />
            </a>
            <a href="https://www.youtube.com/c/DigiSkillsPakistan" target="_blank" className="btn btn-outline-primary btn-sm mx-1">
              <i className="fa fa-youtube-play" />
            </a>
            <a href="https://www.instagram.com/digiskillspakistan/" target="_blank" className="btn btn-outline-primary btn-sm mx-1">
              <i className="fa fa-instagram" />
            </a>
            <a href="https://twitter.com/digiskillspak" target="_blank" className="btn btn-outline-primary btn-sm mx-1">
              <i className="fa fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-dark text-light py-3">
    <div className="container">
      <div className="text-center">
        <p className="mb-0">© 2025 <a href="/Default.aspx" className="text-light">Solebazar.pk</a>. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>


  );
};

export default Footer