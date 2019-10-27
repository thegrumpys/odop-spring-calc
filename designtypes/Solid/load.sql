INSERT INTO `design` (`created_at`, `updated_at`, `user`, `type`, `name`, `value`) VALUES
('2019-01-01 00:00:00', '2019-01-01 00:00:00', NULL, 'Solid', 'startup', '{"symbol_table":[{"input":true,"name":"Length","value":12,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Longest dimension","equationset":true,"hidden":false,"smin":12,"vmin":-1,"smax":100},{"input":true,"name":"Width","value":10,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":80,"ioclass":0,"sdlim":0,"tooltip":"Width dimension","equationset":true,"hidden":false,"vmin":-1,"smin":10,"smax":80},{"input":true,"name":"Height","value":8,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":60,"ioclass":0,"sdlim":0,"tooltip":"Shortest dimension","equationset":true,"hidden":false,"vmin":-1,"smin":8,"smax":60},{"input":true,"name":"Material","value":6,"units":"","type":"table","table":"materials","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Select from list","equationset":false,"hidden":false,"smin":6,"smax":6},{"input":true,"name":"Density","value":0.036,"units":"lb/cu-in","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Weight per unit volume of the selected material","equationset":false,"hidden":false,"smin":0.036,"smax":0.036},{"input":false,"name":"Volume","value":960,"units":"cu-in","lmin":0,"lmax":0,"cmin":1,"cmax":1200,"ioclass":0,"sdlim":0,"tooltip":"Three-dimensional space enclosed","equationset":true,"hidden":false,"smin":1,"smax":1200},{"input":false,"name":"Surface Area","value":592,"units":"sq-in","lmin":0,"lmax":0,"cmin":0,"cmax":900,"ioclass":0,"sdlim":0,"tooltip":"Sum of the area of the surfaces","equationset":true,"hidden":false,"smin":592,"smax":900},{"input":false,"name":"VolToSurfArea","value":1.6216216216216217,"units":"ratio","lmin":0,"lmax":0,"cmin":0,"cmax":10,"ioclass":0,"sdlim":0,"tooltip":"Computed ratio of volume to surface area","equationset":true,"hidden":false,"smin":1.6216216216216217,"smax":10},{"input":false,"name":"Girth","value":36,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Perimeter around width and height dimensions","equationset":true,"hidden":false,"smin":36,"smax":100},{"input":false,"name":"Length+Girth","value":48,"units":"inches","lmin":0,"lmax":1,"cmin":0,"cmax":108,"ioclass":0,"sdlim":0,"tooltip":"Sum of length and girth dimensions. Shippers limit to 108 in.","equationset":true,"hidden":false,"vmax":-0.5555555555555556,"smin":48,"smax":108},{"input":false,"name":"Diagonal","value":17.549928774784245,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"3D distance from corner to furthest corner","equationset":true,"hidden":false,"smin":17.549928774784245,"smax":100},{"input":false,"name":"Weight","value":34.559999999999995,"units":"lb","lmin":0,"lmax":1,"cmin":0,"cmax":70,"ioclass":0,"sdlim":0,"tooltip":"Volume times Density of the selected material. Shippers limit to 70 Lb.","equationset":true,"hidden":false,"vmax":-0.5062857142857143,"smin":34.559999999999995,"smax":70}],"labels":[{"name":"COMMENT","value":"Rectangular Solid default startup file ..."}],"version":"3","result":{"objective_value":0,"termination_condition":"","violated_constraint_count":0},"system_controls":{"ioopt":3,"maxit":100,"weapon":1,"nmerit":1,"fix_wt":1.5,"con_wt":1,"zero_wt":10,"viol_wt":1,"mfn_wt":0.01,"objmin":0.00005,"del":1,"delmin":0.0001,"tol":0.0001,"smallnum":1e-7}}');
