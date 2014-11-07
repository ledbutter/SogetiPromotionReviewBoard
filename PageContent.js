var MainPoint = function(main, subPoints) {
    this.main = main;
    this.subPoints = subPoints;
};

var PageContent = function (pageNumber) {
    this.pageNumber = pageNumber;
    this.title = "";
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
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 4:
            this.title = "Productivity";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 5:
            this.title = "Business Development";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 6:
            this.title = "Delivery Excellence";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 7:
            this.title = "Leadership";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 8:
            this.title = "Sogeti Contributions";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 9:
            this.title = "Consultative & Professional Skills";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 10:
            this.title = "Practice & Industry Expertise";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 11:
            this.title = "Professional Community";
            this.contents[0] = new MainPoint("TCDNUG", []);
            this.contents[1] = new MainPoint("Stack Overflow", ["2k+ reputation points", "<img src='/Images/SO.png' alt='SO Reputation'/>"]);
            break;
		case 12:
            this.title = "Performance Appraisal";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 13:
            this.title = "PDP";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 14:
            this.title = "IBP";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 15:
            this.title = "Skills/Competencies";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 15:
            this.title = "Profile";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
		case 15:
            this.title = "Recommendation Letter";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
        default:
            this.title = "Unknown";
            break;
    }
}

module.exports = PageContent;