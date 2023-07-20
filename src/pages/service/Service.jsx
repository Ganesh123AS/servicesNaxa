import React, { useEffect } from "react";
import ButtonCard from '../../components/service/ButtonCard';
import { Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceStart } from "../../redux/slice/serviceSlice";
import ServiceCard from "../../components/service/ServiceCard";

const Service = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServiceStart());
  }, [dispatch]);

  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    return <>Something Went Wrong....</>;
  }
  const outerStyle = {
    position: "relative",
  };
  const innerStyle = {
    padding: "1rem 0",
    margin: "0 auto",
    alignItems: "center",
    gap: "1.2rem",
    textAlign: "center",
    width: "60%",
    color: "#fff",
    background:"linear-gradient(59deg, #05f, #05f 20%, #001acb 70%, #001acb 97%, #001acb)",
    position: "absolute",
    borderRadius: "2rem",
    left: "20%",
    bottom: "-3%",
  };
  return (
    <Stack style={outerStyle}>
      <ServiceCard data={data} />
        <Stack style={innerStyle}>
          <Typography variant="h4">
            Seeking <span>Collaboration</span>?
          </Typography>
          <Typography variant="h6">
            We constantly look forward to exploring ideas, collaborations, and
            technical <br /> innovations. If you want to partner with us, we are
            just an email away.
          </Typography>
          <ButtonCard text="Let's Talk" />
      </Stack>
    </Stack>
  );
};

export default Service;