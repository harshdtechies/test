import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

function Dashboard_contact_cardlist() {
  return (
    <div class="dashboard-main-wrapper">
      <Navbar />
      <Sidebar />
      <div class="dashboard-wrapper">
        <div class=" influence-finder">
          <div class="container-fluid dashboard-content">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="page-header">
                  <h2 class="mb-2">Contact Card List </h2>
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
                          Contact Card List
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card contact-card mb-4 shadow-sm">
                  <div class="card-header p-4">
                    <div class="dropdown float-right dropleft">
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
                    <div class="mb-4">
                      <img
                        alt="Claire Connors"
                        src="../assets/images/avatar-1.jpg"
                        class="rounded-circle icon-xl "
                      />
                    </div>
                    <h3 class="mb-1 h4">Patricia King</h3>
                    <p class="d-md-flex justify-content-between mb-0">
                      <span class="small">Customer</span>{" "}
                      <span class="small font-weight-bold">
                        27 Feb, 2019 1:58 pm
                      </span>
                    </p>
                  </div>
                  <div class="card-body p-4">
                    <p class="mb-2">influence@patricia.com</p>
                    <p>0922183700</p>
                    <span class="align-text-bottom">
                      <i class="fas fa-circle font-8 text-danger mr-2"></i>
                    </span>
                    <span class="text-danger">Hot Lead</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card contact-card mb-4 shadow-sm">
                  <div class="card-header p-4">
                    <div class="dropdown float-right dropleft">
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
                    <div class="mb-4">
                      <img
                        alt="Claire Connors"
                        src="../assets/images/avatar-2.jpg"
                        class="rounded-circle icon-xl "
                      />
                    </div>
                    <h3 class="mb-1 h4">Tanuja Vaidya</h3>
                    <p class="d-md-flex justify-content-between mb-0">
                      <span class="small">Customer</span>{" "}
                      <span class="small font-weight-bold">
                        27 Feb, 2019 1:58 pm
                      </span>
                    </p>
                  </div>
                  <div class="card-body p-4">
                    <p class="mb-2">influence@tanuja.com</p>
                    <p>0922183700</p>
                    <span class="align-text-bottom">
                      <i class="fas fa-circle font-8 text-warning mr-2"></i>
                    </span>
                    <span class="text-warning">Warm Lead</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card contact-card mb-4 shadow-sm">
                  <div class="card-header p-4">
                    <div class="dropdown float-right dropleft">
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
                    <div class="mb-4">
                      <img
                        alt="Claire Connors"
                        src="../assets/images/avatar-3.jpg"
                        class="rounded-circle icon-xl "
                      />
                    </div>
                    <h3 class="mb-1 h4">Shashank Krishnan</h3>
                    <p class="d-md-flex justify-content-between mb-0">
                      <span class="small">Customer</span>{" "}
                      <span class="small font-weight-bold">
                        27 Feb, 2019 1:58 pm
                      </span>
                    </p>
                  </div>
                  <div class="card-body p-4">
                    <p class="mb-2">influence@shashank.com</p>
                    <p>021 45834503</p>
                    <span class="align-text-bottom">
                      <i class="fas fa-circle font-8 text-info mr-2"></i>
                    </span>
                    <span class="text-info">Cold Lead</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card contact-card mb-4 shadow-sm">
                  <div class="card-header p-4">
                    <div class="dropdown float-right dropleft">
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
                    <div class="mb-4">
                      <img
                        alt="Claire Connors"
                        src="../assets/images/avatar-4.jpg"
                        class="rounded-circle icon-xl "
                      />
                    </div>
                    <h3 class="mb-1 h4">Bholhai Menon</h3>
                    <p class="d-md-flex justify-content-between mb-0">
                      <span class="small">Customer</span>{" "}
                      <span class="small font-weight-bold">
                        27 Feb, 2019 1:58 pm
                      </span>
                    </p>
                  </div>
                  <div class="card-body p-4">
                    <p class="mb-2">influence@menon.com</p>
                    <p>089 5146530</p>
                    <span class="align-text-bottom">
                      <i class="fas fa-circle font-8 text-success mr-2"></i>
                    </span>
                    <span class="text-success">Customer (Won)</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card contact-card mb-4 shadow-sm">
                  <div class="card-header p-4">
                    <div class="dropdown float-right dropleft">
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
                    <div class="mb-4">
                      <img
                        alt="Claire Connors"
                        src="../assets/images/avatar-4.jpg"
                        class="rounded-circle icon-xl "
                      />
                    </div>
                    <h3 class="mb-1 h4">Bholhai Menon</h3>
                    <p class="d-md-flex justify-content-between mb-0">
                      <span class="small">Customer</span>{" "}
                      <span class="small font-weight-bold">
                        27 Feb, 2019 1:58 pm
                      </span>
                    </p>
                  </div>
                  <div class="card-body p-4">
                    <p class="mb-2">influence@menon.com</p>
                    <p>089 5146530</p>
                    <span class="align-text-bottom">
                      <i class="fas fa-circle font-8 text-danger mr-2"></i>
                    </span>
                    <span class="text-danger">Hot Lead</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card contact-card mb-4 shadow-sm">
                  <div class="card-header p-4">
                    <div class="dropdown float-right dropleft">
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
                    <div class="mb-4">
                      <img
                        alt="Claire Connors"
                        src="../assets/images/avatar-1.jpg"
                        class="rounded-circle icon-xl "
                      />
                    </div>
                    <h3 class="mb-1 h4">Patricia King</h3>
                    <p class="d-md-flex justify-content-between mb-0">
                      <span class="small">Customer</span>{" "}
                      <span class="small font-weight-bold">
                        27 Feb, 2019 1:58 pm
                      </span>
                    </p>
                  </div>
                  <div class="card-body p-4">
                    <p class="mb-2">influence@patricia.com</p>
                    <p>0922183700</p>
                    <span class="align-text-bottom">
                      <i class="fas fa-circle font-8 text-success mr-2"></i>
                    </span>
                    <span class="text-success">Customer (Won)</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card contact-card mb-4 shadow-sm">
                  <div class="card-header p-4">
                    <div class="dropdown float-right dropleft">
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
                    <div class="mb-4">
                      <img
                        alt="Claire Connors"
                        src="../assets/images/avatar-2.jpg"
                        class="rounded-circle icon-xl "
                      />
                    </div>
                    <h3 class="mb-1 h4">Tanuja Vaidya</h3>
                    <p class="d-md-flex justify-content-between mb-0">
                      <span class="small">Customer</span>{" "}
                      <span class="small font-weight-bold">
                        27 Feb, 2019 1:58 pm
                      </span>
                    </p>
                  </div>
                  <div class="card-body p-4">
                    <p class="mb-2">influence@tanuja.com</p>
                    <p>0922183700</p>
                    <span class="align-text-bottom">
                      <i class="fas fa-circle font-8 text-info mr-2"></i>
                    </span>
                    <span class="text-info">Cold Lead</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card contact-card mb-4 shadow-sm">
                  <div class="card-header p-4">
                    <div class="dropdown float-right dropleft">
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
                        aria-labelledby="dropdownMenuLinkEight "
                      >
                        <a class="dropdown-item" href="#">
                          Edit
                        </a>
                        <a class="dropdown-item" href="#">
                          Share
                        </a>
                      </div>
                    </div>
                    <div class="mb-4">
                      <img
                        alt="Claire Connors"
                        src="../assets/images/avatar-3.jpg"
                        class="rounded-circle icon-xl "
                      />
                    </div>
                    <h3 class="mb-1 h4">Shashank Krishnan</h3>
                    <p class="d-md-flex justify-content-between mb-0">
                      <span class="small">Customer</span>{" "}
                      <span class="small font-weight-bold">
                        27 Feb, 2019 1:58 pm
                      </span>
                    </p>
                  </div>
                  <div class="card-body p-4">
                    <p class="mb-2">influence@shashank.com</p>
                    <p>021 45834503</p>
                    <span class="align-text-bottom">
                      <i class="fas fa-circle font-8 text-danger mr-2"></i>
                    </span>
                    <span class="text-danger">Hot Lead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard_contact_cardlist;
