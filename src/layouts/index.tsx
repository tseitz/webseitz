import * as React from "react";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import "./index.css";

const StyledHeader = styled.header`
  background: #0dbc79;
  margin-bottom: 1.45rem;
  border: 10px solid #2472c8;
  margin: "0 auto";
  max-width: 960;
  padding: "1.45rem 1.0875rem";
`;

const Heading = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = () => (
  <StyledHeader>
    <Heading>
      <StyledLink to="/">Gatsby</StyledLink>
    </Heading>
  </StyledHeader>
);

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <Header />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
