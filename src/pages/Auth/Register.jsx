import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <div className="container flex h-[calc(100vh-(65px+56px))] flex-col items-center justify-center">
        <div className="flex max-w-[500px] flex-col gap-4 rounded-2xl border-[1px] border-solid border-slate-100 shadow-lg shadow-sky-200">
          <h2 className="mt-4 text-center text-2xl text-sky-500">حساب جديد</h2>
          <form action="" className="flex flex-col gap-4 px-4 py-6">
            <input
              type="text"
              placeholder="الاسم"
              required
              className="w-full rounded-lg border-[1px] border-slate-100 border-b-sky-400 p-2 text-center outline-none placeholder:text-sky-400"
            />
            <input
              type="email"
              placeholder="البريد الالكتروني"
              required
              className="w-full rounded-lg border-[1px] border-slate-100 border-b-sky-400 p-2 text-center outline-none placeholder:text-sky-400"
            />
            <input
              type="password"
              placeholder="كلمة المرور"
              required
              className="w-full rounded-lg border-[1px] border-slate-100 border-b-sky-400 p-2 text-center outline-none placeholder:text-sky-400"
            />
            <button className="btn my-4 w-full border-sky-400 bg-sky-400 py-2 text-xs text-slate-100  hover:bg-sky-500 sm:text-base xl:px-6 ">
              انشاء حساب
            </button>
            <p className="m-0 text-center text-sm text-slate-500">
              لديك حساب بالفعل؟
              <Link to="/login">
                <span className="mx-2 text-sky-400">اضغط هنا</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      {/* <Container
        style={{
          height: "calc(100vh - (80px + 56px))",
        }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <h2 className="mb-4 text-primary">حساب جديد</h2>
        <div
          style={{
            maxWidth: "500px",
            borderRadius: "1rem",
            border: "1px solid #dedede",
            boxShadow: "0 3px 5px rgba(0,0,0,0.2)",
          }}
        >
          <Form className="py-4 px-3">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>الاسم</Form.Label>
              <Form.Control type="text" required className="text-center" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>البريد الالكتروني</Form.Label>
              <Form.Control type="email" required className="text-center" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>كلمة المرور</Form.Label>
              <Form.Control type="password" required className="text-center" />
            </Form.Group>
            <Button
              variant="outline-primary"
              type="submit"
              className="w-100 mb-4"
            >
              انشاء حساب
            </Button>
            <Form.Text className="text-muted text-center d-block m-0">
              لديك حساب بالفعل
              <Link to="/login"> اضغط هنا</Link>
            </Form.Text>
          </Form>
        </div>
      </Container> */}
    </>
  );
};
