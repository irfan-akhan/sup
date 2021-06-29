import { Grid, Typography } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";
import about from "../../styles/About.module.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const contact = () => {
  const routes = {
    "How It Works": "/#how-it-works",
    "Frequently Asked Questions": "/customerservice/faq",
    "Report a Problem": "/customerservice/contact",
  };
  return (
    <section
      className={about.container}
      style={{ width: "80vw", margin: "7rem auto" }}
    >
      <Grid container justify="center" spacing={3}>
        <Grid item sm={3}>
          <Sidebar heading="Customer Service" routes={routes} />
        </Grid>
        <Grid item xs={8} style={{ marginLeft: "1.5rem" }}>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Get in Touch
          </Typography>
          <img
            src={`${prefix}/assets/images/location.jpg`}
            alt="location of office"
            style={{ width: "600px", height: "200px" }}
          />
          <Typography variant="body1" paragraph color="textSecondary">
            Our office is located at No. 2, Martins Street, Off Ojuelegba Road,
            Yaba, Lagos, Nigeria.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            If you wish to get in touch with us, kindly use the contact
            information below:
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            For General Enquiries:
            <a style={{ color: "blue" }} href="mailto:info@shuttlelane.com">
              info@shuttlelane.com
            </a>
            ,
            <a style={{ color: "blue" }} href="tel:+2349030009452">
              +234 903 000 9452
            </a>
            or
            <a style={{ color: "blue" }} href="tel:+2349030009486">
              +234 903 000 9486
            </a>
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Booking:
            <a style={{ color: "blue" }} href="mailto:booking@shuttlelane.com">
              booking@shuttlelane.com
            </a>
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            WhatsApp:
            <a
              style={{ color: "blue" }}
              href="https://api.whatsapp.com/send?phone=2349030009108&text=Hello, Shuttlelane"
            >
              +234 903 000 9108
            </a>
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            For general enquiries, please allow up to 24 hours to receive a
            response.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};

export default contact;
