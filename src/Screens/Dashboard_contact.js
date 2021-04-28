import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

function Dashboard_contact() {
  return (
    <div class="dashboard-main-wrapper">
      <Navbar />
      <Sidebar />
      <div class="dashboard-wrapper">
        <div class="">
          <div class="container-fluid dashboard-content">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="page-header">
                  <h2 class="mb-2">Contacts Dashboard </h2>
                  <p class="pageheader-text">
                    Special admin theme with Simple UI style for monitoring or
                    administration web applications.
                  </p>
                  <div class="page-breadcrumb">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#" class="breadcrumb-link">
                            Dashboard
                          </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          Contacts Dashboard{" "}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 d-flex justify-content-end">
                <a href="#" class="btn btn-primary btn-sm mr-2 " id="trigger">
                  Create Contact
                </a>
                <div class="upload-btn-wrapper mr-2">
                  <button type="button" class="btn btn-secondary btn-sm">
                    Import
                  </button>
                  <input type="file" name="myfile" />
                </div>
              </div>
              <div id="slide-panel" class="slide-panel-light bg-white p-4">
                <h3>Add New Customer</h3>
                <form autocomplete="off">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                      <div class="form-group">
                        <label class="control-label" for="name">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder=""
                          class="form-control "
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label class="control-label" for="email">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder=""
                          class="form-control"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label class="control-label" for="phone">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="number"
                          placeholder=""
                          class="form-control"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary">
                          Create Contact{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="card shadow-sm mb-4">
                  <div class="card-header">
                    <h4 class="mb-0">
                      Contacts Overview{" "}
                      <span class="float-right">Last 30 Days</span>
                    </h4>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card bg-primary-light shadow-none">
                          <div class="card-body p-2 px-4">
                            <h2 class="display-5 mb-0">3</h2>
                            <p class="text-dark font-weight-bold">
                              {" "}
                              New Contacts
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card bg-warning-light shadow-none">
                          <div class="card-body p-2 px-4">
                            <h2 class="display-5 mb-0">25</h2>
                            <p class="text-dark font-weight-bold">
                              Highest Created in Day
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card bg-danger-light shadow-none">
                          <div class="card-body p-2 px-4">
                            <h2 class="display-5 mb-0">8</h2>
                            <p class="text-dark font-weight-bold">
                              Average Contact Created
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card bg-success-light shadow-none">
                          <div class="card-body p-2 px-4">
                            <h2 class="display-5 mb-0">1200</h2>
                            <p class="text-dark font-weight-bold">
                              {" "}
                              Total Contact Created
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card shadow-sm mb-4">
                  <h5 class="card-header">
                    Contacts Created By Day{" "}
                    <span class="d-inline-block float-right">Last 30 Days</span>
                  </h5>
                  <div class="card-body">
                    <div class="ct-chart-vertical ct-golden-section"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card shadow-sm mb-4">
                  <h5 class="card-header">
                    New Contact by Source{" "}
                    <span class="d-inline-block float-right">Last 30 Days</span>
                  </h5>
                  <div class="card-body">
                    <div class="ct-chart ct-golden-section"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="card shadow-sm mb-4">
                  <div class="card-header">
                    <h4 class="mb-0">
                      Recently Created Contacts{" "}
                      <span class="float-right">Last 30 Days</span>
                    </h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        id="example"
                        class="table table-striped table-bordered second"
                        style={{ width: "100%" }}
                      >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-1.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Rachel Wicker
                            </td>
                            <td>influence@patricia.com</td>
                            <td>09 22183700</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkOne"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkOne"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-2.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Michael Ledford
                            </td>
                            <td>influence@michael.com</td>
                            <td>999 999 2019</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkTwo"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkTwo"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-3.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Tanuja Vaidya
                            </td>
                            <td>influence@tanuja.com</td>
                            <td>046 2854744</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkThree"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkThree"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-4.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Shashank Krishnan
                            </td>
                            <td>influence@shashank.com</td>
                            <td>021 45834503</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkFour"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkFour"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-5.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Bhola Bhai Menon
                            </td>
                            <td>influence@menon.com</td>
                            <td>089 5146530</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkFive"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkFive"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-1.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Roseale Menon
                            </td>
                            <td>influence@roseale.com</td>
                            <td>999 999 2019</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkSix"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkSix"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-2.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Michael Ledford
                            </td>
                            <td>influence@ledford.com</td>
                            <td>089 5146530</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkSeven"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkSeven"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-3.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Tanuja Vaidya
                            </td>
                            <td>influence@vaidya.com</td>
                            <td>09 22183700</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkEight"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkEight"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-4.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Shashank Krishnan
                            </td>
                            <td>influence@krishnan.com</td>
                            <td>089 5146530</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkNine"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkNine"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-5.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Bholabhai Menon{" "}
                            </td>
                            <td>influence@bholabhai.com</td>
                            <td>09 22183700</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkTen"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkTen"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-1.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Patricia King
                            </td>
                            <td>influence@patricia.com</td>
                            <td>09 22183700</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkEleven"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkEleven"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-2.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Patricia King
                            </td>
                            <td>influence@patricia.com</td>
                            <td>09 22183700</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkTwelve"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkTwelve"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-3.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Patricia King
                            </td>
                            <td>influence@patricia.com</td>
                            <td>09 22183700</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLinkThirteen"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkThirteen"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                alt="Claire Connors"
                                src="../assets/images/avatar-4.jpg"
                                class="avatar-xs rounded-circle mr-3"
                              />
                              Patricia King
                            </td>
                            <td>influence@patricia.com</td>
                            <td>09 22183700</td>
                            <td>
                              <div class="dropdown">
                                <a
                                  class=""
                                  href="#"
                                  id="dropdownMenuLink"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  <a class="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Dashboard_contact;
