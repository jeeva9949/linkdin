import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <Sharebox>
        share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>start posting</button>
        </div>
        <div>
          <button>
            <img src="/images/video.png" alt="" />
            <span>photo</span>
          </button>
          <button>
            <img src="/images/video.png" alt="" />
            <span>viode</span>
          </button>
          <button>
            <img src="/images/video.png" alt="" />
            <span>event</span>
          </button>
          <button>
            <img src="/images/video.png" alt="" />
            <span>write article</span>
          </button>
        </div>
      </Sharebox>
      <div>
        <Article>
          <ShareActor>
            <a href="#">
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <br />
            <button>
              <img
                style={{ width: "30px", height: "10px;" }}
                src="/images/ellipsis.png"
                alt=""
              />
            </button>
          </ShareActor>
          <Description>Description</Description>
          <SharedImg>
            <a href="#">
              <img src="/images/sharedimg.jpg" alt="" />
            </a>
          </SharedImg>
          <SocialCount>
            <li>
              <button>
                <img
                  src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                  alt=""
                />
                <span>75</span>
              </button>
            </li>
            <li>
              <a href="#"> 2 comments</a>
            </li>
          </SocialCount>
          <SocialActions>
            <button>
              <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"  alt="hhhh"/>
              <span>Like</span>
            </button>
            <button>
              <img
                style={{ width: "15px" }}
                src="/images/comments.jpg"
                alt=""
              />
              <span>Comment</span>
            </button>
            <button>
              <img style={{ width: "15px" }} src="/images/share.png" alt="" />
              <span>share</span>
            </button>
            <button>
              <img style={{ width: "15px" }} src="/images/send.png" alt="" />
              <span>send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;
const Commoncard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0/15%), 0 0 0 rgba(0 0 0 /20%);
`;

const Sharebox = styled(Commoncard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(Commoncard)`
  padding: 0px;
  margin: 0 0 8px;
  overflow: visible;
`;

const ShareActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        &:hover {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCount = styled.ul`
  display: flex;
  align-items: flex-start;
  line-height: 1.3;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0px;
  border-bottom: 1 px solid #e9e5df;
  list-style: none;

  li {
    margin-left: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;

    @media (max-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

export default Main;
