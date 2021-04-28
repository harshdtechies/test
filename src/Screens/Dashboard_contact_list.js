import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

function Dashboard_contact_list() {
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
                  <h2 class="mb-2">Contact List Dashboard </h2>
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
                          Contact List Dashboard{" "}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-end">
                <form>
                  <div class="form-group">
                    <input
                      class="form-control bg-white"
                      type="text"
                      name="daterange"
                      value="01/01/2018 - 01/15/2018"
                    />
                  </div>
                </form>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="card">
                  <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <h3 class="mb-0">Contacts</h3>
                      </div>
                      <div class="d-flex justify-content-end">
                        <a
                          href="#"
                          class="btn btn-primary btn-sm mr-2"
                          id="trigger"
                        >
                          Create Contact
                        </a>
                        <div class="upload-btn-wrapper mr-2">
                          <button
                            type="button"
                            class="btn btn-secondary btn-sm"
                          >
                            Import
                          </button>
                          <input type="file" name="myfile" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="slide-panel" class="slide-panel-light bg-white p-4 ">
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

                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        id="example"
                        class="table table-striped table-bordered second"
                        style={{ width: "100%" }}
                      >
                        <thead>
                          <tr>
                            <th>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck21"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck21"
                                ></label>
                              </div>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Last Contacted </th>
                            <th>Last Activity</th>
                            <th>Lead Status</th>
                            <th>Created Date</th>
                            <th>Edit</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck22"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck22"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-danger mr-2"></i>
                              </span>
                              <span class="text-danger align-middle">
                                Hot Lead
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck23"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck23"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-warning mr-2"></i>
                              </span>
                              <span class="text-warning align-middle">
                                Warm Lead
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck24"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck24"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-info mr-2"></i>
                              </span>
                              <span class="text-info align-middle">
                                Cold Lead
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck25"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck25"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-success mr-2"></i>
                              </span>
                              <span class="text-success align-middle">
                                Customer (Won)
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck26"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck26"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-danger mr-2"></i>
                              </span>
                              <span class="text-danger align-middle">
                                Dead Lead
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck27"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck27"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-primary mr-2"></i>
                              </span>
                              <span class="text-primary align-middle">
                                Do Not Call Records
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck28"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck28"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-success mr-2"></i>
                              </span>
                              <span class="text-success align-middle">
                                Customer (Won)
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck29"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck29"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-danger mr-2"></i>
                              </span>
                              <span class="text-danger align-middle">
                                Hot Lead
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck30"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck30"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-danger mr-2"></i>
                              </span>
                              <span class="text-danger align-middle">
                                Dead Lead
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck31"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck31"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-danger mr-2"></i>
                              </span>
                              <span class="text-danger align-middle">
                                Hot Lead
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck32"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck32"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-success mr-2"></i>
                              </span>
                              <span class="text-success align-middle">
                                Customer (Won)
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck33"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck33"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-danger mr-2"></i>
                              </span>
                              <span class="text-danger align-middle">
                                Hot Lead
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck34"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck34"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-success mr-2"></i>
                              </span>
                              <span class="text-success align-middle">
                                Customer (Won)
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck35"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck35"
                                ></label>
                              </div>
                            </td>
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
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>27 Feb, 2019 1:58 pm</td>
                            <td>
                              <span>
                                <i class="fas fa-circle font-8 text-danger mr-2"></i>
                              </span>
                              <span class="text-danger align-middle">
                                Hot Lead
                              </span>
                            </td>
                            <td>27 Feb, 2019</td>
                            <td>
                              <a href="#">
                                <i class="fas fa-edit"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <i class="fas fa-external-link-square-alt"></i>
                              </a>
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

export default Dashboard_contact_list;
