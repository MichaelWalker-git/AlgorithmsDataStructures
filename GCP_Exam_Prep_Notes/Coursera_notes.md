
Cloud Computing
- On Demand
- Broad Network
- Resource Pooling
Rapid Elasticity
Measured Server

Every company is a data company.

Virtual data center.

Raw computer  -> Infrastructure as a service (IAAS).
- Pay as you allocate

App code to libraries to data -> Platform as a service (PaaS)
- Pay as you go.

Zone - Region - Data center

Roundtrip 5 milliseconds
- Make things fault tolerant by spreading to multiple zones

Platform as a Service
- Multiregional = redundant systems

15 Regions (Data centers use 2% of world's energy)
- Billed by the second instead of rounding to nearest minute

Kubernetes - container infrastracture

Hadoop

App Engine -> Platform as a service (use of VMs)


GCP -
open source convertible
-> Not trapped into one vendor

Kubernetes - ability to mix and match various microservices across different cloud providers

Stackdriver - manages and monitor across different cloud

-----

GCP - build test and deploy the cloud
Multilayered Security
- Server/Databoards
- Designed by Google
Hardware Security chip (Titan)
Physical security
- Accesss only available to a small subset of people
Cryptographic communication
- rPc data in transit

Red (Orange) team exercises, simulated exercises
- U2F security, phishing

-Vulnerability reward program

# What's new in GCP
## Project
- IAM - control for admins
- group related business services
- Giving lease amount privileges, only privileges nesseceary for job

Interacting with GCP
1.) Console - web
2.) Cloud shell/ SDK
3.) Mobile App
4.) Rest based API

Resources -> Projects -> Folders -> Directories -> Org Node
- Policies inherited from parent

Project Ids are always unique
- Names are nicknames, whatever

More generous policies overrides (IMPORTANT)

## Identity Access Management
- Who can take actions
- Who, what, what resources.
- Who = Google Account, GSuit Domain group
- What = Collection of permissions
- What Resources = Start/ Stop Permissions

# Roles
## Primitives
- Owner
- Editor
- Viewee (View Only)
- Billing (W/out change resource abilities)

## Pre-defined set of roles, can be applied to folder, organization, etc.
- ie.) Big Table - part project, Big Table- instance

## Fine grained permissions
- List
- Delete
- Get
- Set Machine type
- Start
- Stop

## Minimum amount of rules necessary for their job.
- Start/ stop

- Only at project, or org level; not folder level

## Service Account
- Controls server - server interactions
- Carry server- server comms
- authenticate one service to another
- control privileges used by services

## Create Service Account to authenticate your virtual machine to cloud storage
- identified by an email address, project_number, project_id
- use crypto keys instead of passwords
- needs to be managed
- Also a resource
- Different VMs = different permissions for groups

# Interacting with GCP
## SDK - set of tool to manage
- GCP Shell- main command line interface for GCP
- gsutils
- big query

## Restful API
- uses JSON, urls, pass info like web browsers
- console = turn on and off APIs, limit

## APIs explorer
- Cloud launcher = quick solution
- Solution marketplace containing pre-packaged ready to deploy solutions

## Editable Before deployment
- No additiaonl charge underneath normal usage fees
- Commercially avail. licenses
- LAMP - Linux, Apache, mySQL, PHP

## Virtual Machine
- Fully fledged OS -editable
- CPU/ memory/type of storage
- Network connection

## Virtual Private Cloud
- Connect GCP resources
- Static routes
- Global scope
- Subnets within regions
- Span zones
- Different Resources
- Expand subnets by IP

## VPC - one network
- Can have neighboring subnets, two compute engines, in different zones
- great network layers

- no upfront costs:
- VM can be either windows, linux and can import images
- machine type - very small (free f1 micro) to large
- custom VMs
- Can add GPUs for data processing
- Disks: Standard Disk, Solid State Drive, Local SSD, Persistent Disks

(Startup scripts - Apps)
(Snapshops - used to migrate backups)
(Preemptive VMs - Compute engine, delete this VM when its needed in another region/Cheaper)

## Preset Memory, CPUs, etc.
- Scaling out, not scaling up, balancing loads.

## VPC capabilities
- Routing Tables - We use them to forward traffic from one instance to another
- Firewall, metadata tags
- VPC belong to GPC projects
--- Cloud Load Balancing
---- in front of your traffic,
---- HTTP/ TCP,
---- cross region/ subregion
---- moves traffic, if region is down

## HTTPS Load balancer
- Cross regional load balancer for web app
- Cloud CDN - Partner program

## Secure Socket
- SSL Load balancing
- proxy load balancer
- non HTTPS

## TCP
- Global TP proxy
- Particular port
- non SSL

## Load balancing Internal (internal IP)
- 8.8.8.8 free by Google
- DNS translates the internet hostnames into addresses
- Cloud DNS - same infrastracture - low latency; high availability.
 - GCP consoles
 - API
 - CDN (edge caching)

## Cloud Router - enables dyanmic gateway protocol to access the topography of a VPC with an onsite premise network
- share route information over VPN
- enables dynamic VPC use
- ie.) Add subnet to VPC + on premise network will get routes to be seen

## Direct Peering - connect any business network to Google
- Customer doesn't want to use the public internet
- Peering = router in same public data center as a google point of presence, exchanging traffic
- Not covered by SLS

## Dedicated Interconnect
- Physical connection, lower latency, higher availability.
- Direct connection with on-premises Google, may be cheaper than ISP
- Great for companies that have data intensive apps.

## Carrier Peering
- higher avail
- lower latency
- enterprise grade network servers using server proxies.

# Cloud Data Storage Options
## Cloud Storage
- Object file system storage. (Binary immutable Objects)
- Encrypts data before writing to disk
- Bytes of data with unique key
- fully managed, no capacity limit, provision capacity
- Example: website, data, cluster, large files for download
- Buckets for objects.
- Can use versioning on these objects
    - new > old
    - lifecycle management, "keep most recent", "delete versions > 365 days"
- Transfer Data - HTTPS
- Other GCP services
- Geographic location, default class for buckets
- Cloud IAM
  - Project into Buckets
  - ACL(s) finer control
  - Scope (users), permissions
- Storage - all accessible by API
  - Region
    - Less redundant
    - Cheaper
    - Specific region
    Uses:
      - Data for compiling
      - VMS
      - Kubernetes Engine
  - Multiregional
    -  High performance
    - Broad continuation, redundant
    - Frequently used websites
    - Interaction control
    - Mobile app
  Backups and archival storage
  - Nearline
    - Infrenquently stored durable data
    - Read/ write once a month
  - Coldline
    - Low cost
    - Data archival
    - Online backup
    - Disaster recovery
    - Once a year; min allowed time: 90 days

## Cloud Data Store
- noSQL, structured data
- ACID transactions, SQL-like queries, indexes
- Automatically handles sharding/ replication
- Transactions using indexed properties
    - Multirow queries
- can be integration point
    - With Cloud Datastore's RESTful interface
    - Data can easily be accessed by any deployment target.
    - Build solutions that span across App Engine and Compute Engine
- Datastore is more geared towards Python/Java/Go web app developers (originally App Engine)
- The billing model is very different:
     - Datastore charges for read/write operations, storage and bandwidth
     - Bigtable charges for 'nodes', storage and bandwidth


## Big Table
- noSQL, data analysis
- Single key look-ups, indexed by a single Row key.
- More like IAAS, single region
- HBase (Sql like queries), Hadoop portability
- Atomcity on one row, no transactions
- Structure data / flexible schemas,
- Sparely populatd rows
- Billions of rows, don't need to reconfigure
- Persistent hash tables
- Very low latency
- Handles upgrades easily, highly scalable
- Encryption
- Example: From application database stream to spark storage. batch processes, summarize down
- Uses: iOT, user analytics, financial documents

## Cloud SQL
- DB Schema 0 consitent
- Transaction is all or nothing; Bank example
- mySQL, postGreSQL (beta)
- Managed service or server in VM compute engine
    - Read duplicates
- Replica service during outage
- On demand/ schedule batch
- Google secruity
- Scale vertically with machine type
- SQL workbench with other apps

## Cloud Spanner
- Virtually unlimited horizontal scalability and 99,999% service-level agreement (SLA)
- Pentabytes of data
- Relational database service with transactional consistency
- Schemas, SQL, auto synchronous replication, high availability
- Outgrown RDS (AWS)/ sharding databases for throughput high performance
- Cross-table transactional support: transactions can span across multiple tables—doesn’t have to be limited to a single table (unlike Apache HBase or Apache Kudu).
- Need global data
- Examples: Finance and investment industry

# Introduction to Containers
Alternate to hardware
# VMs vs Containers
Virtual Machines
- Virtual Machines are isolated from one another in part by each VM having its own instance of OS
- OS -> Slow to boot
- Modern OS - built in capcity to isolate environment
    - Processes: Running, name space, limit by supervisor

## Containers
- Package up your application into minimally sized components
- Abstract unnecessary and unimportant details in environment
- Loose coupling
- Containers start up quicker, use less resources than Virtual Machines
- Min. required software, have its own instance of OS
- Calling into kernal only when it is necessary
- Determines image format
- Kubernetes uses docker container runtime

## Kubernetes
- Multi cloud soltion
- Container cluster orchestration system
- Pod: Group of containers networked together with guaranteed network access
    - Help devs build modularity
- Example: Web shared Application
    - Has own dev tools (one container), your tools in another container
    - Laptop/ GCP
    - Modular/ Replacable
    - Rolling update
        - Update without downtime
    - Kubernetes cluster = group of machines scheduled for container(nodes)
        - load balancer/ scaling option
    - Cloud agnostic
        - Storage persistence
        - Network
        - Load Balancer

- Build and manage Kubernetes cluser
    - Manage, build, delete clusters
    - Resources from compute engine VPC(s)
- Declarative syntax
    - Give description of cluster environment you want and Kubernetes handles the changes, and implements new settings
    - NO - No need to issue the underlying compute engine or API calls
    - YES - Relieves developers from the operational details of running a cluster
- Built in logging
- Autonode upgrades
- To use kubernetes, you need to be able to build kubernetes containers, store images of container

# Google Cloud Container Builder/ Google Cloud Container Registry
## App Engine - Platform as a Service - Scalable Application
- Scalable, deployment, maintainable
- Highly Variable
- Standard and Flexible Environment

## Standard Environment
- Free daily usage
- Milliseconds to be ready
- Low usage apps can be free
- Test locally with SDK
- Binary, runtime for JAVA, Python, Go,
    - No 3rd party apps
    - Can't write to Local
    - All requests will timeout after 60 seconds
- Sandbox
    - Scale/ Manage/ Fine Grained control
1.) Develop/ Test the web locally
2.) Use a SDK to deploy to App Engine
3.) App engine autoscales/ reliably serves your webpage
    - Can access a variety of services using dedicated APIs

## Flexible Environment
- Specify container (Docker) on VMs
    - VM / App engine maintains this for you with Health Checks
    - Which geography/location of these VMs
    - Standard runtime can access containerized apps
- No autoshutdown
- Can use 3rd party apps
- Network access
- SSH abilities

# App Engine vs Kubernetes

## App Engine
1.) People who want to take max control of their applications, deployment and scaling
2.) Primary use: Web/ Mobile apps
    - Containers are a means to an end

## Kubernetes
1.) Any language support
2.) Container based workhorse


# APIs - Application Programming Interfaces
- Structured software for interface for consumers
- Abstracted / documented unnecessary information
- Versions of APIs

# Supporting APIs in two ways
1.) Cloud Endpoints
Example: Developing software. One of GCP's backend / backend APIs
    - Only consumed by developers you trust
    - Monitor log its used
Answer: Cloud Endpoints - cloud console
    - Your choice of language/ client technologies

2.) Apigee Edge (3rd party)
    - Plaform for making APIs available to your customers
    - Partners ind eveloping /managing proxies
    - Bussiness focus: Rate limiter, quotas analytics

# Development in the cloud
Git - own git instance
- hosted, 3rd party

# Cloud Source Repository
- Private git repository
- Source Viewer

# Event Driven Parts
- What provisioning resources to that new service?
- Cloud Functions Beta
    - Automatically run/ runtime binaries
- Create single purpose function that respond to events without server/ runtime
- You chose what events to watch, and triggers what cloud functionality

# Problem: Keeping track of environments manually => Lots of work
- Answer: Deployment Manager - Templates Declaration (infrastracture manager)
    - Creation and management of GCP resources for you
    - Template file (YAML/ Python) -> Components
    - Does all template direction
        - Edit YAML
    - Version control
        - Use YAML file

# Monitoring - Stack driver
    - Infrastructure
    - Debug,
    - Logger,
    - VM, container,
    - Metrics
    - Trace
    - Error
- Respond with information vs Panic
- Uptime checks, load balances, alerts with uptime/ errors
- Dashboards = customizable
- Logging - Metrics, alerts, dashboard
    - Cloud PubSub, Big Query
- Error reporting , new errors detected per URL statistics
- Debugger: production code to source with application state.

# Google Cloud Big Data Solutions
- Integrated Serverless Platform
    - Fully managed custom solution
    - Apache Hadoop
        - MapReduce Programming model
            - 1 Function Map runs in parallel with massive dataset to produce intermediate results
            - 1 Function Reduce builds final result set with intermediate set
    - Dataproc
        - Manages Develop and deploy Hadoop/ spark/ Hive/ Pig on GCP
        - Creates clusters in 90 seconds or less
        - Scales clusters allowing you to integrate with Cloud Storage and stackdriver Logging
        - Coordinate and manage the lifecyle of clusters, which run until shutdown
        - You can resize your clusers even during job processing