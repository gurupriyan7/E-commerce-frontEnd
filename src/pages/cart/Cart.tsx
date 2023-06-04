import React, { Dispatch, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Layout } from "../../layout";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../features/cart/cartSlice";

export const Cart = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { cart, isError, message,isSuccess,isLoading } = useSelector((state: any) => state.cart);

  useEffect(() => {
    dispatch(getUserCart(""));
  }, []);

  return (
    <Layout>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>
{cart?.data?.items?.map((item:any)=>(
  <MDBCard className="rounded-3 mb-4">
  <MDBCardBody className="p-4">
    <MDBRow className="justify-content-between align-items-center">
      <MDBCol md="2" lg="2" xl="2">
        <MDBCardImage
          className="rounded-3"
          fluid
          src={item?.prodId?.image}
          alt="Cotton T-shirt"
        />
      </MDBCol>
      <MDBCol md="3" lg="3" xl="3">
        <p className="lead fw-normal mb-2">{item?.prodId?.name}</p>
        <p>
          <span className="text-muted">Rating: </span>{item?.prodId?.rating}
        </p>
      </MDBCol>
      <MDBCol
        md="3"
        lg="3"
        xl="2"
        className="d-flex align-items-center justify-content-around">
        <MDBBtn color="link" className="px-2">
          <MDBIcon fas icon="minus" />
        </MDBBtn>

        <MDBInput
          min={1}
          defaultValue={item?.quantity}
          type="number"
          size="sm"
        />

        <MDBBtn color="link" className="px-2">
          <MDBIcon fas icon="plus" />
        </MDBBtn>
      </MDBCol>
      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
        <MDBTypography tag="h5" className="mb-0">
          ${item?.prodId?.price}
        </MDBTypography>
      </MDBCol>
      <MDBCol md="1" lg="1" xl="1" className="text-end">
        <a href="#!" className="text-danger">
          <MDBIcon fas icon="trash text-danger" size="lg" />
        </a>
      </MDBCol>
    </MDBRow>
  </MDBCardBody>
</MDBCard>
))}
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </Layout>
  );
};
