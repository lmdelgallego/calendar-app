import dayjs from "dayjs";
import { useState } from "react";
import Modal from "react-modal"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

  const [isOpen, setIsOpen] = useState(true)

  const [formValues, setFormValues] = useState({
    title: 'Luis Miguel',
    notes: 'Del Gallego',
    start: dayjs().toDate(),
    end: dayjs().add(2, 'hours').toDate()
  });

  const handleInputChange = ({ target }) => {
    console.log(target);
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const handleDateChange = (event, changing ) => {
    setFormValues({
      ...formValues,
      [changing]: event
    })
  }

  const onCloseModal = () => {
    console.log('close modal')
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">

          <div className="form-group mb-2">
              <label>Fecha y hora inicio</label>
              <DatePicker
                className="form-control"
                name="start"
                selected={formValues.start}
                onChange={(event) => handleDateChange(event, 'start')}
                dateFormat="Pp"
              />
              {/* <input className="form-control" placeholder="Fecha inicio" /> */}
          </div>

          <div className="form-group mb-2">
              <label>Fecha y hora fin</label>
              <DatePicker
                className="form-control"
                name="end"
                selected={formValues.end}
                onChange={(event) => handleDateChange(event, 'end')}
                minDate={formValues.start}
                dateFormat="Pp"
              />
          </div>

          <hr />
          <div className="form-group mb-2">
              <label>Titulo y notas</label>
              <input
                  type="text"
                  className="form-control"
                  placeholder="Título del evento"
                  name="title"
                  autoComplete="off"
                  value={formValues.title}
                  onChange={handleInputChange}
              />
              <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
          </div>

          <div className="form-group mb-2">
              <textarea
                  type="text"
                  className="form-control"
                  placeholder="Notas"
                  rows="5"
                  name="notes"
                  value={formValues.notes}
                  onChange={handleInputChange}
              ></textarea>
              <small id="emailHelp" className="form-text text-muted">Información adicional</small>
          </div>

          <button
              type="submit"
              className="btn btn-outline-primary btn-block"
          >
              <i className="far fa-save"></i>
              <span> Guardar</span>
          </button>
          <pre>
            {JSON.stringify(formValues)}
          </pre>
      </form>

    </Modal>
  )
}
