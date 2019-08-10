<template>
  <div class="project-content">
    <scroll-tracker :content="content"></scroll-tracker>
    <div class="content">
      <content-block title="Identity Management" theme="one">
        <div class="block-one">
          <span class="sponsor-info">Sponsored by <img class="okta-logo" src="@/assets/projects/identity-management/okta-logo.png"></span>
          <span>UX / UI Design</span>
          <img class="okta-devices" src="@/assets/projects/identity-management/okta-devices.png">
          <h3>Okta tasked us with tackling identity from a B2B model towards a B2C model.</h3>
          <div class="footer">
            <div class="three-spans">
              <span><u>Date:</u>&nbsp;Fall 2018</span>
              <span><u>Duration:</u>&nbsp;One Week</span>
              <span><u>Category:</u>&nbsp;Academic</span>
            </div>
            <span><u>Team:</u>&nbsp;Sheng Jiang, Yash Mittal, Elizabeth King</span>
            <span><u>Skills:</u>&nbsp;User Research Synthesis, Wireframing, Sketching, Hi-Fi Mocks, Design Strategy</span>
          </div>
        </div>
      </content-block>
      <content-block title="Tl;dr" theme="two">
        <span class="content-header">Why</span>
        <p class="content-text">To help the average consumer manage digital identity</p>
        <span class="content-header">What</span>
        <p class="content-text">Leveraging Okta's tech platform towards the consumer market</p>
        <span class="content-header">How</span>
        <p class="content-text">Visualizing usage, centralized access control, and security alerts</p>
      </content-block>
      <content-block title="Design Process" theme="three">
        <div class="block-three">
          <img class="design-process-artboard" src="@/assets/projects/identity-management/design-process-artboard.png">
          <div class="artboard-labels">
            <span>Narrow down on target problem space</span>
            <span>Conduct exploratory secondary and primary research</span>
            <span>Ideate and rapidly mock prototypes</span>
          </div>
        </div>
      </content-block>
      <content-block title="Problem Framing" theme="two">
        <div class="block-four">
          <span class="content-header">Problem Space</span>
          <p>Individuals generally perceive little or no control over the information that comprise their identities.</p>
          <p>Without visibility into the exchange of identity attributes across the enterprise for authentication, verification, and authorization, individuals are vulnerable to identity fraud.</p>
          <p>Taken in a business context, users often have identity managed and represented through the organizations they respectively represent. Because Okta asked us to focus on ideas and experience surrounding identity, we narrowed to choose B2C relationships as this is mostly unexplored territory for Okta, being a B2B business model.</p>
          <span class="content-header">Focus Area</span>
          <img class="focus-area-diagram" src="@/assets/projects/identity-management/focus-area-diagram.png">
          <p>In our design space, we decided to focus on the process of onboarding <b>new users</b> with Okta to manage their online identity and personal data in the <b>personal space.</b></p>
          <p>Once we established a clear design for the personal space, we then projected into the future to focus on how the <b>personal space could translate into a work context.</b></p>
        </div>
      </content-block>
      <content-block title="Research" theme="four">
        <div class="block-five">
          <div class="content-header">Methods</div>
          <p>Based on our limited schedule, we decided to deploy three research methods: <b>literature review</b>,&nbsp;<b>semi-structured interviews</b>, and&nbsp;<b>competitive analysis</b>.</p>
          <p>To see the full body of research we conducted, please click the button below.</p>
          <div class="full-research-link">
            <span>Full Research</span>
          </div>
          <div class="content-header">Key Insights</div>
          <div class="circles">
            <div class="circle one">
              <div class="image">
                <img src="@/assets/projects/identity-management/circle-one.png">
              </div>
              <p>Users often don't care about their personal data being online or consider their personal data valuable.</p>
            </div>
            <div class="circle two">
              <div class="image">
                <img src="@/assets/projects/identity-management/circle-two.png">
              </div>
              <p>Users often don't take preemptive measures to secure their personal data online.</p>
            </div>
            <div class="circle three">
              <div class="image">
                <img src="@/assets/projects/identity-management/circle-three.png">
              </div>
              <p>Users are unaware of how their personal data is being handled online, particularly in the case of social media sites selling their data.</p>
            </div>
          </div>
        </div>
      </content-block>
      <content-block title="Users" theme="one">
        <div class="spacer"></div>
      </content-block>
      <content-block title="Proposed Design" theme="two">
        <div class="spacer"></div>
      </content-block>
    </div>
  </div>
</template>

<script>
  import ContentBlock from '@/components/content/content-block.vue';
  import ScrollTracker from '@/components/ui/scroll-tracker.vue';

  export default {
    name: 'identity-management-content',
    components: {
      ContentBlock,
      ScrollTracker
    },
    data: () => ({
      content: [{text: 'Identity Management', theme: 'one'},
                {text: 'Tl;dr', theme: 'two'},
                {text: 'Design Process', theme: 'three'},
                {text: 'Problem Framing', theme: 'two'},
                {text: 'Research', theme: 'four'},
                {text: 'Users', theme: 'one'},
                {text: 'Proposed Design', theme: 'two'}]
    }),
  }
</script>

<style scoped lang="scss">
  .content {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin-top: 40px;
    .spacer {
      height: 400px;
    }
    .block-one {
      display: flex;
      flex-flow: column;
      align-items: center;
      max-width: 500px;
      margin: auto;
      text-align: center;
      .sponsor-info {
        display: inline-block;
        font-size: 1.3em;
        margin: 8px 0 10px 0;
        .okta-logo {
          height: 28px;
          margin-left: 4px;
          vertical-align: -4px;
        }  
      }
      .okta-devices {
        width: 440px;
      }
      .footer {
        display: flex;
        flex-flow: column;
        margin-top: 24px;
        font-size: 0.66em;
        color: #fff;
        width: 100%;
        text-align: left;
        &>* {
          margin-bottom: 12px;
        }
        .three-spans {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .block-three {
      max-width: 820px;
      .design-process-artboard {
        width: 800px;
        margin-left: 15px;
        margin-top: 50px;
      }
      .artboard-labels {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        color: #fff;
        text-align: center;
        font-size: 0.95em;
      }
    }
    .block-four {
      max-width: 820px;
      display: flex;
      flex-flow: column;
      .focus-area-diagram {
        width: 500px;
        margin: auto;
      }
    }
    .block-five {
      max-width: 820px;
      .full-research-link {
        position: relative;
        cursor: pointer;
        margin: auto;
        height: 62px;
        background-color: #fa6182;
        width: 300px;
        text-align: center;
        line-height: 62px;
        span {
          color: #fff;
          text-transform: uppercase;
          font-size: 1.8em;
        }
        &:after {
          position: absolute;
          transition: left 0.1s ease, top 0.1s ease;
          left: -4px;
          top: -4px;
          width: 300px;
          height: 62px;
          border: 2px solid #ddd;
          content: "";
        }
        &:hover {
          background-color: darken(#fa6182, 3%);
          &:after {
            left: 4px;
            top: 4px;
          }
        }
      }
      .circles {
        width: 100;
        display: flex;
        justify-content: space-between;
        .circle {
          display: flex;
          flex-flow: column;
          width: 250px;
          align-items: center;
          &.one {
            text-align: left;
          }
          &.two {
            text-align: center;
          }
          &.three {
            text-align: right;
          }
          .image {
            width: 200px;
            height: 200px;
            border-radius: 100%;
            background-color: #193d54;
            margin-bottom: 20px;
            padding: 10px;
            padding-top: 22px;
            img {
              width: 180px;
            }
          }
        }
      }
    }
  }
</style>