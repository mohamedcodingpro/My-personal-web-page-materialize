<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mohamed Abdirahman's Personal Webpage</title>
    <!-- Materialize CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <style>
        body {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
        }
        main {
            flex: 1 0 auto;
        }
        .container {
            margin-top: 50px;
        }
        .intro-section, .city-section, .language-section, .subjects-section {
            padding: 50px 0;
        }
        .section-title {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="nav-wrapper teal">
                <a href="#" class="brand-logo center">Mohamed Abdirahman</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#city">City</a></li>
                    <li><a href="#language">Language</a></li>
                    <li><a href="#subjects">Subjects</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <div class="container">
            <!-- Intro Section -->
            <div id="intro" class="intro-section">
                <h2 class="section-title center-align">Welcome to My Personal Webpage</h2>
                <div class="row">
                    <div class="col s12 m6">
                        <img src="your-photo-with-table-mountain.jpg" alt="Photo with Table Mountain" class="responsive-img">
                    </div>
                    <div class="col s12 m6">
                        <h5>Mohamed Abdirahman</h5>
                        <p>Welcome to my personal webpage! Here you will find information about my favorite city, the language I want to learn, and my favorite subjects.</p>
                    </div>
                </div>
            </div>

            <!-- City Section -->
            <div id="city" class="city-section teal lighten-5">
                <h2 class="section-title center-align">Which City?</h2>
                <div class="row">
                    <div class="col s12 m6">
                        <img src="city-photo.jpg" alt="City Photo" class="responsive-img">
                    </div>
                    <div class="col s12 m6">
                        <p>The city I would love to visit is...</p>
                    </div>
                </div>
            </div>

            <!-- Language Section -->
            <div id="language" class="language-section">
                <h2 class="section-title center-align">A Foreign Language</h2>
                <div class="row">
                    <div class="col s12 m6">
                        <p>The foreign language I would like to learn is...</p>
                    </div>
                    <div class="col s12 m6">
                        <table class="striped">
                            <thead>
                                <tr>
                                    <th>English</th>
                                    <th>Foreign Language</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Hello</td>
                                    <td>...</td>
                                </tr>
                                <tr>
                                    <td>Goodbye</td>
                                    <td>...</td>
                                </tr>
                                <tr>
                                    <td>Thank you</td>
                                    <td>...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Subjects Section -->
            <div id="subjects" class="subjects-section teal lighten-5">
                <h2 class="section-title center-align">Favorite Subjects</h2>
                <div class="row">
                    <div class="col s12">
                        <p>I completed my qualification at...</p>
                    </div>
                    <div class="col s12 m4">
                        <img src="subject1-photo.jpg" alt="Subject 1" class="responsive-img">
                        <p>Subject 1</p>
                    </div>
                    <div class="col s12 m4">
                        <img src="subject2-photo.jpg" alt="Subject 2" class="responsive-img">
                        <p>Subject 2</p>
                    </div>
                    <div class="col s12 m4">
                        <img src="subject3-photo.jpg" alt="Subject 3" class="responsive-img">
                        <p>Subject 3</p>
                    </div>
                </div>
            </div>

            <!-- Link to Full Web Page -->
            <div class="center-align">
                <a href="personal-page.html" class="btn-large teal">Visit Full Web Page</a>
            </div>
        </div>
    </main>

    <footer class="page-footer teal">
        <div class="container">
            <div class="row">
                <div class="col s12 center-align">
                    <p class="white-text">&copy; 2024 Mohamed Abdirahman</p>
                    <a href="https://github.com/mohamedcodingpro" class="white-text">Visit my GitHub page</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Materialize JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
