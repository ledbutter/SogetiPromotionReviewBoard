var MainPoint = function(main, subPoints) {
    this.main = main;
    this.subPoints = subPoints;
};

var PageContent = function (pageNumber) {
    this.pageNumber = pageNumber;
    this.title = "";
		this.description = "";
    this.contents = [];
    switch (this.pageNumber) {
        case 1:
            this.title = "CMB 2014";
            this.contents[0] = new MainPoint("Sven Grosen", []);
            this.contents[1] = new MainPoint("Promotion to Manager Consultant", []);
            break;
        case 2:
            this.title = "Summary of CMB Case";
            this.contents[0] = new MainPoint("Client Work", ["OTACE", "Client Manager Recommendation"]);
            this.contents[1] = new MainPoint("Unit/Practice Work", ["Training", "Counseling", "Social Committee", "Side Work"]);
			this.contents[2] = new MainPoint("Certifications", ["Microsoft", "Sogeti"]);
            break;
        case 3:
            this.title = "Client Delight";
			this.description = "This measures the Consultant's ability to delight the client and produce excellent deliverables. This measurement is obtained primarily from client formal/informal feedback, client e-mails, client meetings, OTACE documentation, or feedback from UDM, AE or Project Managers";
            this.contents[0] = new MainPoint("Thomson Reuters", ["OTACE", "Extensions"]);
            break;
		case 4:
            this.title = "Productivity";
			this.description = "This reflects the total effort put forth by the consultant. The goal for all Consultants is to remain fully utilized with their contributions to the client as well as to the unit. URVE (Utilization Rate Vacation Excluded) is just one dial of measurement we use in this category: Utilization Rate. It is simply the ratio of hours billed to available hours (less PTO).";
            this.contents[0] = new MainPoint("Utilization", ["URVE: 98.89"]);
            this.contents[1] = new MainPoint("Client Committment", ["36 hours 1H 2014"]);
            break;
		case 5:
            this.title = "Business Development";
			this.description = "Consistently contributing to our sales pipeline results by powerfully leveraging others (internal / external) and allowing oneself to be fully leveraged by others in sales pursuits so Sogeti wins.   Demonstrating excellence through individual accomplishments, team accomplishments AND partner relationship growth. Active participation in the Collaborative Selling and Selling While Delivering processes.";
            this.contents[0] = new MainPoint("TR Relationships", []);
            this.contents[1] = new MainPoint("AE Relationship", ["Aborted Proposal", "Leads", "Client Hires"]);
            break;
		case 6:
            this.title = "Delivery Excellence";
			this.description = "As a trusted advisor, consistently delivering exemplary service to our clients by executing the Sogeti Delivery model/best practices (differentiators, tools, processes, methods), implementing an appropriate level of risk and delivering on financial commitments to achieve profitability. Incorporates all project management & control best practices.";
            this.contents[0] = new MainPoint("Sogeti Security Certification", []);
            this.contents[1] = new MainPoint("Adapting to Client Needs", ["Classic ASP/C++", "Linux/Perl/PHP", "ASP.NET Web Forms/MVC"]);
            break;
		case 7:
            this.title = "Leadership";
			this.description = "Being an inspired, compelling leader of self and others for the benefit of Sogeti and our clients; competently representing Sogeti with pride and confidence that inspires client and co-worker trust  and respect.  Demonstrating the attitude, confidence and professionalism to engage with a client at or one or two levels above your own level. Willingness to assume various roles of leadership throughout the organization.";
            this.contents[0] = new MainPoint("Training", ["Interns", "Upcoming"]);
            this.contents[1] = new MainPoint("Client Confidence", ["Interviewing"]);
            break;
		case 8:
            this.title = "Sogeti Contributions";
			this.description = "It's incumbent for all Sogeti family members to contribute to the success of the unit, peers, and the company. There are many direct and intangible contributions which you can make. This area captures these items. Included in this section are the community & social activities that build company loyalty, good morale, and fun working environment.";
            this.contents[0] = new MainPoint("Counseling", []);
            this.contents[1] = new MainPoint("Social Committee", ["Summer Picnic"]);
            break;
		case 9:
            this.title = "Consultative & Professional Skills";
			this.description = "Exhibits professionalism and professional behavior at all times, complies with Sogeti and client policies and procedures. Able to make a positive first impression, inspiring trust, credibility, and confidence with the client and peers. Has strong professional work ethics. Has solid foundation of IT analytical skills, relevant talents, and productivity abilities.";
            this.contents[0] = new MainPoint("My Beliefs", ["Strive to always behave professionally", "Constant improvement is to be expected"]);
            this.contents[1] = new MainPoint("Counselor Appraisal Notes", ["Modest demeanor that is confident to the client", "Very professional"]);
            break;
		case 10:
            this.title = "Practice & Industry Expertise";
			this.description = "Demonstrating broad understanding of the technology market and excellence in at least one relevant technology, building additional areas of expertise as appropriate.  Taking a strategic vision and tactical interest and involvement in technology innovation to help Sogeti grow.   Active participation and contribution to your Practice or Vertical.";
            this.contents[0] = new MainPoint("Microsoft Certifications", ["70-515", "70-480", "70-486", "70-487"]);
            this.contents[1] = new MainPoint("This Presentation...", []);
            break;
		case 11:
            this.title = "Professional Community";
			this.description = "Actively participating in professional and community networks and organizations such that these activities contribute to the continued success of Sogeti as well as your own professional development.  Included in this competency is your contributions to appropriate publications, white papers, news artifacts, public speaking, etc.  Active contribution to marketing, branding and CSR activities.";
            this.contents[0] = new MainPoint("TCDNUG", []);
            this.contents[1] = new MainPoint("Stack Overflow", ["2k+ reputation points", "<img src='/Images/SO.png' alt='SO Reputation'/>"]);
            break;
		case 12:
            this.title = "Performance Appraisal";
            this.contents[0] = new MainPoint("Client Delight (Target: 4)", ["Self: 4", "Counselor: 4"]);
            this.contents[1] = new MainPoint("Productivity (Target: 4)", ["Self: 3", "Counselor: 3"]);
			this.contents[2] = new MainPoint("Business Development (Target: 3)", ["Self: 3", "Counselor: 3"]);
			this.contents[3] = new MainPoint("Leadership (Target: 3)", ["Self: 3", "Counselor: 4"]);
			this.contents[4] = new MainPoint("Delivery Excellence (Target: 3)", ["Self: 3", "Counselor: 3"]);
			this.contents[5] = new MainPoint("Sogeti Contributions (Target: 3)", ["Self: 3", "Counselor: 4"]);
			this.contents[6] = new MainPoint("Consultative & Professional Skills (Target: 4)", ["Self: 4", "Counselor: 4"]);
			this.contents[7] = new MainPoint("Professional Community (Target: 3)", ["Self: 3", "Counselor: 3"]);
			this.contents[8] = new MainPoint("Practice & Industry Expertise (Target: 3)", ["Self: 4", "Counselor: 4"]);
            break;
		case 13:
            this.title = "PDP";
            this.contents[0] = new MainPoint("Long Term", ["Participate in Pursuit", "Next Certification"]);
            this.contents[1] = new MainPoint("Short Term", ["Pursuit Certification Test/Interview", "Promotion to Manager Consultant..."]);
            break;
		case 14:
            this.title = "IBP";
            this.contents[0] = new MainPoint("2014", ["386.84", "IV", "20 GVP", "28 PVP"]);
            this.contents[1] = new MainPoint("2013", ["IV"]);
            break;
		case 15:
            this.title = "Skills/Competencies";
            this.contents[0] = new MainPoint("39 Listeed", ["Updated November 7th"]);
			this.contents[1] = new MainPoint("Latest Additions", ["Azure", "F#", ".NET 4.5.1"]);
            break;
		case 16:
            this.title = "Profile";
            this.contents[0] = new MainPoint("Updated Last Week", []);
            this.contents[1] = new MainPoint("<img src='Images/Profile.png' alt='Profile Screnshot'/>", []);
            break;
		case 17:
            this.title = "Recommendation Letter";
			this.contents[0] = new MainPoint("Jeff Gehling", ["Client Manager at Thomson Reuters for 3 years"]);
            this.contents[1] = new MainPoint("It is with great pleasure that I recommend Sven Grosen for the promotion to Manager Consultant.  Sven has been working for me as a developer on multiple projects for over the last three years during which time he has always met or exceeded my expectations.  ", []);
            this.contents[2] = new MainPoint("The team finds Sven's personality, positive attitude, and eagerness to jump in and create solutions to be great assets that drive them to be highly motivated and performance-minded.  Sven is a leader on the team and a great asset.", []);
            break;
		case 18:
			this.title = "My Presentation";
			this.contents[0] = new MainPoint("I'm a single page web application", []);
			this.contents[1] = new MainPoint("Build using only HTML, CSS, and JavaScript", []);
			this.contents[2] = new MainPoint("Even the server is being run by NodeJS", []);
			break;
		case 19:
			this.title = "Thank You for Your Time and Consideration";
			break;
        default:
            this.title = "Unknown";
            break;
    }
}

module.exports = PageContent;