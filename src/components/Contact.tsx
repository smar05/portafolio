import { useEffect, useState } from "react";
import { Icontact } from "../interfaces/Icontact";
import { BackService, EnumDbEndPoints } from "../services/back";

interface IContactEmail {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [dbData, setDbData] = useState<Icontact>(null as any);

  useEffect(() => {
    const fetchDataDb = async () => {
      try {
        const response = await BackService.getDbData(
          EnumDbEndPoints.CONTACT_ME
        );
        setDbData(response.data);
      } catch (error) {}
    };

    fetchDataDb();
  }, []);

  const [formData, setFormData] = useState<IContactEmail>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (data: string, e: any) => {
    const { value } = e.target;

    setFormData({
      ...formData,
      [data]: value,
    });
  };

  const validate = (): boolean => {
    const newErrors: IContactEmail = {} as any;

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres.";
      return false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico es inválido.";
      return false;
    }
    if (!formData.subject) {
      newErrors.subject = "Error en el subject";
      return false;
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
      return false;
    }

    return true;
  };

  const sendEmail = (): void => {
    if (!validate()) return;

    const mailtoLink: string = `mailto:${
      dbData.myEmail
    }?subject=${encodeURIComponent(
      formData.subject
    )}&body=Nombre: ${encodeURIComponent(
      formData.name
    )}%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0AMensaje: ${encodeURIComponent(formData.message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="container-fluid py-5" id="contact">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              {dbData?.backTitle}
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              {dbData?.title}
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form text-center">
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate
                  onSubmit={sendEmail}
                >
                  <div className="form-row">
                    <div className="control-group col-sm-6">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="name"
                        placeholder="Your Name"
                        required={true}
                        data-validation-required-message={
                          dbData?.placeholderName
                        }
                        value={formData.name}
                        onChange={() => handleChange("name", event)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group col-sm-6">
                      <input
                        type="email"
                        className="form-control p-4"
                        id="email"
                        placeholder="Your Email"
                        required={true}
                        data-validation-required-message={
                          dbData?.placeholderEmail
                        }
                        value={formData.email}
                        onChange={() => handleChange("email", event)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      required={true}
                      data-validation-required-message={
                        dbData?.placeholderSubject
                      }
                      value={formData.subject}
                      onChange={() => handleChange("subject", event)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control py-3 px-4"
                      rows={5}
                      id="message"
                      placeholder="Message"
                      required={true}
                      data-validation-required-message={
                        dbData?.placeholderMessage
                      }
                      value={formData.message}
                      onChange={() => handleChange("message", event)}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-primary"
                      type="submit"
                      id="sendMessageButton"
                      disabled={!validate()}
                    >
                      {dbData?.textSubmit}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
