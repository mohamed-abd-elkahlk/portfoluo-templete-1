import { Container } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container className="p-4 py-16">
        <h1 className="text-center text-4xl font-bold  text-[#001b5e] py-4">
          contact
        </h1>
        <form action="" method="POST">
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col ">
              <label className="uppercase text-sm py-2">name</label>
              <input
                className="border-2 border-gray-400 p-2 rounded-lg flex"
                type="text"
                name="name"
                id=""
              />
            </div>
            <div>
              <label className="uppercase text-sm py-2">phone number</label>
              <input
                className="border-2 border-gray-400 p-2 rounded-lg flex w-full"
                type="text"
                name="phone"
                id=""
              />
            </div>
          </div>
          <div className="flex flex-col py-2 ">
            <label className="uppercase text-sm py-2" htmlFor="">
              email
            </label>
            <input
              className="border-2 border-gray-400 p-2 rounded-lg flex w-full"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2 ">
            <label className="uppercase text-sm py-2" htmlFor="">
              subject
            </label>
            <input
              className="border-2 border-gray-400 p-2 rounded-lg flex w-full"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2 ">
            <label className="uppercase text-sm py-2" htmlFor="">
              message
            </label>
            <textarea
              className="border-2 border-gray-400 p-2 rounded-lg flex w-full"
              name="message"
              rows={10}
            ></textarea>
          </div>
          <input
            type="submit"
            className="btn btn-danger w-full rounded-none"
            value={"submit"}
          />
        </form>
      </Container>
    </>
  );
}

export default Contact;
