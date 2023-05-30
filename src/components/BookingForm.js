// Importeer React, Formik, Yup en andere benodigde modules
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Definieer een validatieschema voor Yup
const validationSchema = Yup.object().shape({
  aantalPersonen: Yup.number()
    .min(1, "Minimaal één persoon is vereist")
    .max(10, "Maximaal tien personen zijn toegestaan")
    .required("Aantal personen is verplicht"),
  datum: Yup.date()
    .min(new Date(), "Datum moet in de toekomst zijn")
    .required("Datum is verplicht"),
  tijdstip: Yup.string()
    .oneOf(["12:00", "13:00", "14:00", "15:00", "16:00"], "Ongeldig tijdstip")
    .required("Tijdstip is verplicht"),
  situatie: Yup.string()
    .oneOf(["Zakelijk", "Romantisch", "Familie", "Vrienden"], "Ongeldige situatie")
    .required("Situatie is verplicht"),
  seatingArea: Yup.string()
    .oneOf(["Binnen", "Buiten", "Terras"], "Ongeldige seating area")
    .required("Seating area is verplicht"),
  notities: Yup.string().max(100, "Maximaal 100 tekens zijn toegestaan"),
});

// Definieer een initiële waarde voor de formuliervelden
const initialValues = {
  aantalPersonen: "",
  datum: "",
  tijdstip: "",
  situatie: "",
  seatingArea: "",
  notities: "",
};

// Definieer een functie om de formuliergegevens te verwerken
const onSubmit = (values) => {
  // Hier kunt u de formuliergegevens naar een API sturen of opslaan in een database
  // Voor nu tonen we de gegevens gewoon in een alert
  alert(JSON.stringify(values, null, 2));
};

// Definieer een React component om het formulier te renderen
function BookingForm() {
  return (
    <div className="container">
      <h1>Online tafel reservering</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="aantalPersonen">Aantal personen</label>
              <Field
                type="number"
                name="aantalPersonen"
                id="aantalPersonen"
                className={
                  errors.aantalPersonen && touched.aantalPersonen
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <ErrorMessage
                name="aantalPersonen"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="datum">Datum</label>
              <Field
                type="date"
                name="datum"
                id="datum"
                className={
                  errors.datum && touched.datum
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <ErrorMessage
                name="datum"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tijdstip">Tijdstip</label>
              <Field
                as="select"
                name="tijdstip"
                id="tijdstip"
                className={
                  errors.tijdstip && touched.tijdstip
                    ? "form-control is-invalid"
                    : "form-control"
                }
              >
                <option value="">Kies een tijdstip</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </Field>
              <ErrorMessage
                name="tijdstip"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="situatie">Situatie</label>
              <Field
                as="select"
                name="situatie"
                id="situatie"
                className={
                  errors.situatie && touched.situatie
                    ? "form-control is-invalid"
                    : "form-control"
                }
              >
                <option value="">Kies een situatie</option>
                <option value="Zakelijk">Zakelijk</option>
                <option value="Romantisch">Romantisch</option>
                <option value="Familie">Familie</option>
                <option value="Vrienden">Vrienden</option>
              </Field>
              <ErrorMessage
                name="situatie"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="seatingArea">Seating area</label>
              <Field
                as="select"
                name="seatingArea"
                id="seatingArea"
                className={
                  errors.seatingArea && touched.seatingArea
                    ? "form-control is-invalid"
                    : "form-control"
                }
              >
                <option value="">Kies een seating area</option>
                <option value="Binnen">Binnen</option>
                <option value="Buiten">Buiten</option>
                <option value="Terras">Terras</option>
              </Field>
              <ErrorMessage
                name="seatingArea"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="notities">Notities (Optioneel)</label>
              <Field
                as="textarea"
                name="notities"
                id="notities"
                rows={3}
                className={
                  errors.notities && touched.notities
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <ErrorMessage
                name="notities"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Reserveer
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookingForm;