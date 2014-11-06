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
            this.title = "Page 1 Title";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
        case 2:
            this.title = "Page 2 Title";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
        case 3:
            this.title = "Page 3 Title";
            this.contents[0] = new MainPoint("Main Point 1", ["Sub Point 1.1", "Sub Point 1.2"]);
            this.contents[1] = new MainPoint("Main Point 2", ["Sub Point 2.1", "Sub Point 2.2", "Sub Point 2.3"]);
            break;
        default:
            this.title = "Unknown";
            break;
    }
}

module.exports = PageContent;