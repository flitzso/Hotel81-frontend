import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Reservas.css'

const Reservas = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    promoCode: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.checkIn) errors.checkIn = 'Campo obrigatório';
    if (!formData.checkOut) errors.checkOut = 'Campo obrigatório';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setReservationConfirmed(true);
    }
  };

  return (
    <div className="containerR mt-5">
      {reservationConfirmed ? (
        <div className="alert alert-success" role="alert">
          Reserva confirmada! Obrigado por escolher nosso hotel.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-2 mb-3">
            <label htmlFor="checkIn" className="form-label">Check-in:</label>
            <input
              type="date"
              className={`form-control ${formErrors.checkIn ? 'is-invalid' : ''}`}
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{formErrors.checkIn}</div>
          </div>

          <div className="col-md-2 mb-3">
            <label htmlFor="checkOut" className="form-label">Check-out:</label>
            <input
              type="date"
              className={`form-control ${formErrors.checkOut ? 'is-invalid' : ''}`}
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{formErrors.checkOut}</div>
          </div>

          <div className="col-md-1 mb-3">
            <label htmlFor="adults" className="form-label">Adultos:</label>
            <input
              type="number"
              className="form-control"
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-1 mb-3">
            <label htmlFor="children" className="form-label">Crianças:</label>
            <input
              type="number"
              className="form-control"
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2 mb-3">
            <label htmlFor="promoCode" className="form-label">Código Promocional:</label>
            <input
              type="text"
              className="form-control"
              id="promoCode"
              name="promoCode"
              value={formData.promoCode}
              onChange={handleChange}
            />
          </div>

          <div className="btnReserva col-md-2 mb-3">
            <button type="submit" className="btn btn-primary" href="/home">Reservar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Reservas;
